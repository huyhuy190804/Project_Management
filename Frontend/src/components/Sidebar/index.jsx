import { Users, FolderOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            ⊞
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Editorial</h1>
        </div>
        <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase ml-13">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {/* Users Item */}
          <li>
            <Link
              to="/user"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                isActive("/user")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Users
                size={20}
                className={`${
                  isActive("/user")
                    ? "text-blue-600"
                    : "text-blue-500 group-hover:text-blue-600"
                }`}
              />
              <span className="font-medium">Users</span>
            </Link>
          </li>

          {/* Projects Item */}
          <li>
            <Link
              to="/project"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                isActive("/project")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <FolderOpen
                size={20}
                className={`${
                  isActive("/project")
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-blue-600"
                }`}
              />
              <span className="font-medium">Projects</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
            AR
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 text-sm">Alex Rivera</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
