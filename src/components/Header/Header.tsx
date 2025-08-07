import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h1>Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
