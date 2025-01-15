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
      className={`flex items-center justify-center gap-2  p-2 rounded-lg  ${
        selected
          ? "text-myblack font-semibold bg-fourthDark"
          : "text-slate-500 font-thin"
      }`}
      href={url}
    >
      <Icon size={25} />
      <div>{name}</div>
    </Link>
  );
}

export default AdminSideBarItem;
