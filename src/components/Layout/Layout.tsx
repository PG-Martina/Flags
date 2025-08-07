import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <div className={classes.wrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
