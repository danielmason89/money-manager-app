import styles from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Money-Manager</li>
        {!user && (
          <>
            <li>
              <Link to="/">Home</Link>
              <NavLink to="login">Login</NavLink>
              <NavLink to="signup">Signup</NavLink>
              <NavLink to="help">Help</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="plans">Plans</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Welcome back, {user.displayName}</li>
            <li>
              <button onClick={logout} className="btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
