import React, { useState } from "react";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog";
import { Edit, Trash2 } from "lucide-react";

const ProjectData = ({ projects = [], onEdit, onDelete }) => {
  const [deleteId, setDeleteId] = useState(null);
  // Default sample data
  const defaultProjects = [
    {
      id: "#PRJ-001",
      name: "Q4 Editorial Strategy",
      description: "Planning content distribution for the holiday season.",
      status: "ACTIVE",
      statusColor: "bg-green-100 text-green-700",
      createdDate: "22/3/2026",
    },
    {
      id: "#PRJ-002",
      name: "Brand Refresh 2024",
      description: "Redesigning core assets and style guidelines.",
      status: "COMPLETED",
      statusColor: "bg-blue-100 text-blue-700",
      createdDate: "22/3/2026",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

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
          Active Initiatives
        </h2>
        <p className="text-gray-500 text-lg">
          Track and manage your editorial project lifecycles.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                ID
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Project Name
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Status
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
            {displayProjects.map((project, index) => (
              <tr
                key={project.id || index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* ID Cell */}
                <td className="px-8 py-5">
                  <span className="text-gray-400 font-medium">
                    {project.id}
                  </span>
                </td>

                {/* Project Name Cell */}
                <td className="px-8 py-5">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {project.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </td>

                {/* Status Cell */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span
                      className={`text-xs font-bold uppercase ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </td>

                {/* Created Date Cell */}
                <td className="px-8 py-5 text-gray-700">
                  {project.createdDate}
                </td>

                {/* Actions Cell */}
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit && onEdit(project)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(project.id)}
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
        message="Are you sure you want to delete this project? This action cannot be undone."
        confirmText="Delete"
        cancelText="Keep Project"
      />
    </div>
  );
};

export default ProjectData;
