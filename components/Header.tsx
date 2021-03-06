import { headerContainer } from "../styles";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={headerContainer}>
      <a href={"/"}>
        <FaHome color={"currentColor"} size={40} />
      </a>
      <div style={{ display: "flex" }}>
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={80}
        />
      </div>
    </div>
  );
};

export default Header;
