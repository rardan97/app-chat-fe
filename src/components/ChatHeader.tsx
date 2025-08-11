import { Video, Phone, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatHeader() {
  return (
    <div
      className="
        border-b border-[#1E293B]
        bg-[#0F172A]
        px-6 py-4
        flex justify-between items-center
      "
    >
      <div className="flex items-center gap-4">
        {/* Avatar kecil bulat */}
        <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-semibold text-lg">
          J
        </div>

        <div>
          <p className="font-semibold text-[#CBD5E1] leading-tight">
            John Doe
          </p>
          <p className="text-sm text-[#94A3B8]">online</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {[Video, Phone, MoreVertical].map((Icon, idx) => (
          <Button
            key={idx}
            variant="ghost"
            size="icon"
            className="hover:bg-[#1E40AF] transition-colors w-12 h-12 rounded-full"
          >
            <Icon className="w-5 h-5 text-[#CBD5E1]" />
          </Button>
        ))}
      </div>
    </div>
  );
}