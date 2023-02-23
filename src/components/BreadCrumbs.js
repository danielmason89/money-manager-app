import { Link, useLocation } from "react-router-dom";
import styles from "./bread-crumbs.module.css";

export default function BreadCrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split(["/"])
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className={styles.breadcrumbs}>{crumbs}</div>;
}
