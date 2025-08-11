// components/ProfileSidebar.tsx

import { User, Settings, UserPlus } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <aside
      className="
        w-20 h-screen p-4 flex flex-col items-center
        border-l 
        bg-blue-990 text-blue-300
        space-y-6
        justify-center
      "
    >
      <button
        className="flex flex-col items-center justify-center w-15 h-15 rounded-full hover:bg-blue-700 text-blue-300 hover:text-white transition-colors"
        aria-label="Profile"
      >
        <User className="w-6 h-6" />
        {/* <span className="text-xs mt-1">Profile</span> */}
      </button>
      <button
        className="flex flex-col items-center justify-center w-15 h-15 rounded-full hover:bg-blue-700 text-blue-300 hover:text-white transition-colors"
        aria-label="Settings"
      >
        <Settings className="w-6 h-6" />
      </button>
      <button
        className="flex flex-col items-center justify-center w-15 h-15 rounded-full hover:bg-blue-700 text-blue-300 hover:text-white transition-colors"
        aria-label="Add Friends"
      >
        <UserPlus className="w-6 h-6" />
      </button>
      <button
        className="flex flex-col items-center justify-center w-15 h-15 rounded-full hover:bg-blue-700 text-blue-300 hover:text-white transition-colors"
        aria-label="Add Friends"
      >
        <UserPlus className="w-6 h-6" />
      </button>
    </aside>
  );
}