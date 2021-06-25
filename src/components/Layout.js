import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import Footer from "./footer/Footer";
import GraphqlProvider from "../utils/GraphqlProvider";
import "./layout.css";

const Layout = ({ children }) => {
  const [collapse, setCollapse] = React.useState(false);
  const handleToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <GraphqlProvider>
        <Sidebar collapse={collapse} />
        <div className={`body ${collapse && "shrink"}`}>
          <Topbar handleToggle={handleToggle} />
          <div className="body-content">{children}</div>
          <Footer />
        </div>
        <div
          className={`layout-paper ${collapse && "shrink"}`}
          onClick={() => setCollapse(!collapse)}
        ></div>
      </GraphqlProvider>
    </>
  );
};

export default Layout;
