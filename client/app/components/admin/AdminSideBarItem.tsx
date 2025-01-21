import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSideBarItemProps {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

function AdminSideBarItem({
  icon: Icon,
  name,
  url,
  selected,
}: AdminSideBarItemProps) {
  return (
    <Link
      className={`flex items-center  justify-center gap-2 p-2 rounded-lg transition-colors md:px-3 w-[150px] ${
        selected
          ? "bg-fourthDark text-mywhite text-xs font-semibold"
          : "text-gray-600 hover:bg-gray-200 text-xs"
      }`}
      href={url}
    >
      <Icon size={20} />
      <span>{name}</span>
    </Link>
  );
}

export default AdminSideBarItem;
