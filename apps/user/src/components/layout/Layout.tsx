import React from "react";
import { Menu } from ".";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Menu />
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}
