import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./dashboard.css";
import Income from "./Income";
import Sale from "./Sale";
import Group from "./Group";
import User from "./User";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "./query";

const Dashboard = () => {
  const [detail, setDetail] = useState({
    users: 10,
    groups: 10,
    income: 1000,
    sales: 200,
  });
  const { data, refetch } = useQuery(GET_CONTENT);
  useEffect(() => {
    if (data) {
      setDetail(data);
    }
  }, [data]);
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <>
      <div className="bg-white p-3">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item success-color">
              <User value={detail.users} />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item warning-color-dark">
              <Group value={detail.groups} />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item info-color-dark">
              <Sale value={detail.sales} />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="dashboard-item default-color-dark">
              <Income value={detail.income} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
