import Image from "next/image";
import ViewCounter from "../ViewCounter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Activity } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <Image
        src="/Me.png"
        alt="Me"
        width={50}
        height={50}
        className="rounded-md"
      />

      <div className="flex items-center gap-2">
        <ViewCounter />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
