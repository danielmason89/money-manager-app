import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Money-Manager</li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
