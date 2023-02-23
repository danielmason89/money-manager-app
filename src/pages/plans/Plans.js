import { useLoaderData, Link } from "react-router-dom";
import styles from "./plans.module.css";

export default function Plans() {
  const plans = useLoaderData();

  return (
    <div className={styles.plans}>
      <h3>Money Managers' Plans</h3>
      {plans.map((plan) => (
        <Link to={plan.id.toString()} key={plan.id}>
          <p>{plan.title}</p>
          <p>{plan.minimum}</p>
        </Link>
      ))}
    </div>
  );
}

// loader function

export const plansLoader = async () => {
  const res = await fetch("http://localhost:4000/plans");

  if (!res.ok) {
    throw Error("Could not fetch the list of plans");
  }

  return res.json();
};
