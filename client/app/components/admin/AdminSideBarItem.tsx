import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSideBarItemProps {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
  isOpen: boolean;
}

function AdminSideBarItem({
  icon: Icon,
  name,
  url,
  selected,
  isOpen,
}: AdminSideBarItemProps) {
  return (
    <Link
      className={`flex items-center p-3 gap-2 w-full text-gray-300 hover:bg-gray-600 rounded-md transition-all duration-200 ${
        selected ? "bg-gray-700 text-white" : ""
      }`}
      href={url}
    >
      <Icon size={20} />
      <span className={`${isOpen ? "block" : "hidden"} text-sm`}>{name}</span>
    </Link>
  );
}

export default AdminSideBarItem;
