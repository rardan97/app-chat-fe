import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <aside
      className="
        w-[300px] h-screen py-5 flex flex-col
        border-r border-[#1E293B]/70
        bg-[#0F172A] text-[#CBD5E1]
        shadow-lg px-2
      "
    >
      <SidebarHeader />
      <div className="flex-1 space-y-4 mt-0">
        {/* Contacts */}
        <div
          className="
            flex items-center gap-3 cursor-pointer
            rounded-md p-4
            hover:bg-[#1E40AF]/90
            hover:text-[#E0E7FF]
            transition duration-300 ease-in-out
            transform hover:scale-[1.03]
          "
        >
          <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-semibold select-none">
            J
          </div>
          <div className="overflow-hidden">
            <p className="font-semibold truncate max-w-[180px]">
              John Doe
            </p>
            <p className="text-sm text-[#94A3B8] truncate max-w-[180px]">
              Last message preview here...
            </p>
          </div>
          
        </div>
        <div
          className="
            flex items-center gap-3 cursor-pointer
            rounded-md p-4
            hover:bg-[#1E40AF]/90
            hover:text-[#E0E7FF]
            transition duration-300 ease-in-out
            transform hover:scale-[1.03]
          "
        >
          <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-semibold select-none">
            J
          </div>
          <div className="overflow-hidden">
            <p className="font-semibold truncate max-w-[180px]">
              John Doe
            </p>
            <p className="text-sm text-[#94A3B8] truncate max-w-[180px]">
              Last message preview here...
            </p>
          </div>
          
        </div>
      </div>
      
    </aside>
  );
}