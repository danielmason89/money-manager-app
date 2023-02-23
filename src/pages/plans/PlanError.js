import { Link, useRouteError } from "react-router-dom";

export default function PlanError() {
  const error = useRouteError;

  return (
    <div className="plans-error">
      <h2>{error.message}</h2>
      <Link to="/">Click here to get back to Money Managers' Homepage</Link>
    </div>
  );
}
