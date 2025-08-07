import { useEffect, useState } from "react";
import classes from "./ThemeSwitcher.module.scss";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [isDarkMode]);
  return (
    <button
      type="button"
      className={classes.themeSwitcher}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <span
        className={`${
          isDarkMode ? "material-icons" : "material-icons-outlined"
        } ${classes.themeSwitcher__icon}`}
      >
        brightness_2
      </span>
      Dark Mode
    </button>
  );
}

export default ThemeSwitcher;
