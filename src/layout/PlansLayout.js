import { Outlet } from "react-router-dom";

export default function PlansLayout() {
  return (
    <div className="plansLayout">
      <h2>Plans</h2>
      <p>All of Money Managers Plans</p>
      <Outlet />
    </div>
  );
}
