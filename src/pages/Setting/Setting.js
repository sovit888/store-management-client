import React from "react";
import { Breadcrumb, BreadcrumbItem, CardBody, Card } from "reactstrap";
import SettingForm from "./SettingForm";

const Setting = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Profile</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <CardBody>
          <SettingForm />
        </CardBody>
      </Card>
    </>
  );
};

export default Setting;
