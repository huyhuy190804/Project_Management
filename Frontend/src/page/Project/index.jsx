import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import ProjectData from "../../components/ProjectData";
import ProjectFormDialog from "../../components/ProjectFormDialog";
import Sidebar from "../../components/Sidebar";

const Project = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
      if (response.data.success) {
        const mappedProjects = response.data.data.map((p) => {
          let statusColor = "bg-gray-100 text-gray-700";
          if (p.status === "pending")
            statusColor = "bg-yellow-100 text-yellow-700";
          if (p.status === "in-progress")
            statusColor = "bg-blue-100 text-blue-700";
          if (p.status === "completed")
            statusColor = "bg-green-100 text-green-700";

          return {
            ...p,
            id: p._id,
            statusColor,
            createdDate: new Date(p.createdAt).toLocaleDateString(),
          };
        });
        setProjects(mappedProjects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProjects();
  }, []);

  const handleAddClick = () => {
    setEditingProject(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (project) => {
    // API docs only show POST, but let's assume PUT exists if we needed edit or we just support ADD for now.
    // The instructions only said GET /api/projects/:id, POST /api/projects.
    // There is NO PUT or DELETE for projects in the checklist!
    // But we can leave the dialog open in edit mode if needed, though they don't have endpoints for it.
    // Well, I will just open it.
    setEditingProject(project);
    setIsDialogOpen(true);
  };

  const handleDelete = async (projectId) => {
    // API docs don't list a DELETE /api/projects/:id, but I'll add the fetchProjects call if we implement it.
    console.warn("Delete project API not available in backend docs.");
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingProject) {
        // No PUT endpoint according to README, but we'll leave this here.
        console.warn("Edit project not supported by backend.");
      } else {
        // Create
        await axios.post("/api/projects", formData);
      }
      fetchProjects();
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
          title="Projects"
          buttonText="Add Project"
          onAddClick={handleAddClick}
        />
        <main className="flex-1 p-6">
          <ProjectData
            projects={projects}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        </main>
      </div>
      <ProjectFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={editingProject}
        onSubmit={handleFormSubmit}
        users={users}
      />
    </div>
  );
};

export default Project;
