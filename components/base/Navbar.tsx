import ViewCounter from "../ViewCounter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Activity } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <div>Logo</div>
      <Activity className="h-6 w-6" />
      <ViewCounter />
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
