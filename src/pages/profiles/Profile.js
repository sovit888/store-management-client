import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { connect } from "react-redux";
import { getProfile } from "../../store/action";
import "./profile.css";

const Profile = ({ profile, loadProfile }) => {
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return (
    <>
      <h3>Profile</h3>
      <Card>
        <CardBody>
          {profile.info && (
            <div className="profile">
              <p className="mb-0">Username: {profile.info.username || ""}</p>
              <p className="mb-0">Email: {profile.info.email || ""}</p>
              <p className="mb-0">First: {profile.info.first_name || ""}</p>
              <p className="mb-0">Last: {profile.info.last_name || ""}</p>
              <p className="mb-0">Gender: {profile.info.gender || ""}</p>
              <p className="mb-0">
                Group:{" "}
                {profile.info.group && (
                  <span className="bg-success px-2 py-1 ">
                    {profile.info.group.name || ""}{" "}
                  </span>
                )}
              </p>
              <p className="mb-0">Phone Number: {profile.info.phone || ""}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
};
const mapStateToProps = (state) => {
  return { profile: state.profile };
};
const mapDispatchToProps = (dispatch) => {
  return { loadProfile: () => dispatch(getProfile()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
