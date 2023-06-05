import React from "react";
import { Menu } from ".";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
