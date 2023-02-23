import styles from "./helplayout.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className={styles.helplayout}>
      <header>
        <h2>Money Manager Help </h2>
        <p>Here to Help</p>
      </header>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
