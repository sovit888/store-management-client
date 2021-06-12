import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import "./layout.css";

const Layout = () => {
  const [collapse, setCollapse] = React.useState(false);
  const handleToggle = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <Sidebar collapse={collapse} />
      <div className={`body ${collapse && "shrink"}`}>
        <Topbar handleToggle={handleToggle} />
      </div>
      <div
        className={`layout-paper ${collapse && "shrink"}`}
        onClick={() => setCollapse(!collapse)}
      ></div>
    </>
  );
};

export default Layout;
