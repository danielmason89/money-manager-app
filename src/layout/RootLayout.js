import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
