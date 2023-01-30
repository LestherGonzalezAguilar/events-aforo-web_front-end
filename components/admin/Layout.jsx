import React from "react";
import { NavBar } from "./navBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <section>
      <NavBar />
      <main>
        {children}
      </main>
    </section>
  );
};
