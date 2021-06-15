import React from "react";
import { Card, CardBody } from "reactstrap";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <h3>Profile</h3>
      <Card>
        <CardBody>
          <div className="profile">
            <p className="mb-0">Username: Sovit88</p>
            <p className="mb-0">Email: sovitthapa008@gmail.com</p>
            <p className="mb-0">First: Sovit</p>
            <p className="mb-0">Last: Thapa</p>
            <p className="mb-0">Gender: Male</p>
            <p className="mb-0">
              Group: <span className="bg-success px-2 py-1 ">Staff</span>
            </p>
            <p className="mb-0">Phone Number: 9826184961</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;
