import { Search, Bell, Settings, Plus } from "lucide-react";
import React, { useState } from "react";

const Header = ({ title = "Users", buttonText = "Add User", onAddClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left - Title */}
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings size={20} />
          </button>

          {/* Add Button */}
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors"
          >
            <Plus size={20} />
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
