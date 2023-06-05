import React from "react";
import { Menu } from ".";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}
