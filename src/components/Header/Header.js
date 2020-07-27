import React from "react";
import { ToggleTheme } from "@k2/ui";

import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">K2 Dashboard</div>
      <div className="basic">Basic</div>
      <div className="nike">Nike</div>
      <ToggleTheme className="toggle-theme" widthUnits={3} />
    </div>
  );
};

export default Header;
