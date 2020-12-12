import React from "react";
import "./SideBarOption.css";
const SideBarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sideBbarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideBarOption;
