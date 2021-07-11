import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { removeProfile } from "../../../store/action";

const Logout = ({ deleteProfile }) => {
  const history = useHistory();
  useEffect(() => {
    deleteProfile();
    localStorage.removeItem("token");
    history.push("/login");
  }, [history, deleteProfile]);
  return <></>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProfile: () => dispatch(removeProfile()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
