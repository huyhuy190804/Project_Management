import React, { useState } from "react";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog";
import { Edit, Trash2 } from "lucide-react";

const UserData = ({ users = [], onEdit, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);
  // Default sample data
  const defaultUsers = [
    {
      id: 1,
      name: "Elena Mitchell",
      email: "elena.m@example.com",
      initials: "EM",
      age: 28,
      createdDate: "22/3/2026",
    },
    {
      id: 2,
      name: "Julian Weaver",
      email: "jweaver@studio.co",
      initials: "JW",
      age: 34,
      createdDate: "22/3/2026",
    },
  ];

  const displayUsers = users.length > 0 ? users : defaultUsers;

  const avatarColors = {
    EM: "bg-blue-100 text-blue-600",
    JW: "bg-blue-100 text-blue-600",
  };

  const handleDeleteClick = (id) => setDeleteId(id);
  const handleCloseDialog = () => setDeleteId(null);
  const handleConfirmDelete = () => {
    if (onDelete && deleteId !== null) onDelete(deleteId);
    setDeleteId(null);
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Header */}
      <div className="px-8 pt-8 pb-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          User Directory
        </h2>
        <p className="text-gray-500 text-lg">
          Manage your team members and their account details.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                User
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Age
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Created Date
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {displayUsers.map((user, index) => (
              <tr
                key={user.id || index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* User Cell */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-semibold text-sm ${avatarColors[user.initials] || "bg-blue-100 text-blue-600"}`}
                    >
                      {user.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                {/* Age Cell */}
                <td className="px-8 py-5 text-gray-700">{user.age}</td>

                {/* Created Date Cell */}
                <td className="px-8 py-5 text-gray-700">{user.createdDate}</td>

                {/* Actions Cell */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit && onEdit(user)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDeleteDialog
        open={deleteId !== null}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this user? This action cannot be undone."
        confirmText="Delete"
        cancelText="Keep User"
      />
    </div>
  );
};

export default UserData;
