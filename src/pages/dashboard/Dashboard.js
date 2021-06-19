import React from "react";
import { Row, Col } from "reactstrap";
import "./dashboard.css";
import Income from "./Income";
import Sale from "./Sale";
import Group from "./Group";
import User from "./User";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white p-3">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item success-color">
              <User />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item warning-color-dark">
              <Group />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item info-color-dark">
              <Sale />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item default-color-dark">
              <Income />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
