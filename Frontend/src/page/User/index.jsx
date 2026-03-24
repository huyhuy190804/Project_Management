import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import UserData from "../../components/UserData";
import UserFormDialog from "../../components/UserFormDialog";
import Sidebar from "../../components/Sidebar";

const User = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      if (response.data.success) {
        // Map backend _id to id, and createdAt to createdDate for frontend
        const mappedUsers = response.data.data.map((u) => ({
          ...u,
          id: u._id,
          initials: u.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .substring(0, 2)
            .toUpperCase(),
          createdDate: new Date(u.createdAt).toLocaleDateString(),
        }));
        setUsers(mappedUsers);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddClick = () => {
    setEditingUser(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsDialogOpen(true);
  };

  const handleDelete = async (userId) => {
    try {
      const res = await axios.delete(`/api/users/${userId}`);
      if (res.data.success) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingUser) {
        // Update
        await axios.put(`/api/users/${editingUser.id}`, formData);
      } else {
        // Create
        await axios.post("/api/users", formData);
      }
      fetchUsers();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header
          title="Users"
          buttonText="Add User"
          onAddClick={handleAddClick}
        />
        <main className="flex-1 p-6">
          <UserData users={users} onEdit={handleEditClick} onDelete={handleDelete} />
        </main>
      </div>
      <UserFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={editingUser}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default User;
