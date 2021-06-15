import React from "react";
import { Card, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ReportChart from "./ReportChart";

const Report = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Reports</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <CardBody>
          <ReportChart />
        </CardBody>
      </Card>
    </>
  );
};
export default Report;
