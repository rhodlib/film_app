import React from "react";
import NavBar from "../NavBar";

/**
 * Layout component.
 */
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;
