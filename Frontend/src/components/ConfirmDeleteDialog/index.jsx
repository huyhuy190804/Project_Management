import React from "react";

const ConfirmDeleteDialog = ({
  open,
  onClose,
  onConfirm,
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Keep User",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-500 mb-6">{message}</p>
        <div className="flex gap-4 justify-end">
          <button
            className="px-6 py-2 rounded border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className="px-6 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteDialog;
