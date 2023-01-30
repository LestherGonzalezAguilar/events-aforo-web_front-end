import React from "react";
import { NavBar } from "./navbar/NavBar";

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
