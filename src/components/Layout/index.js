import React from "react";
import Toolbar from "./Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <section className="auth">{children}</section>
    </div>
  );
};

export default Layout;
