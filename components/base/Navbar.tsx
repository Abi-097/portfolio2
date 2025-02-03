import Image from "next/image";
import ViewCounter from "../ViewCounter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Activity } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <Link href="/">
        <Activity />
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/">
          <ViewCounter />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
