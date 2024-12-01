import ViewCounter from "../ViewCounter";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <div>Logo</div>
      <ViewCounter />
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
