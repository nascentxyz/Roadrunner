import { headerContainer } from "../styles";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";

const Header = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={headerContainer}>
      <div style={{ display: "block" }}>
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
