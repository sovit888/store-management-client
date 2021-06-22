import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    history.push("/login");
  }, [history]);
  return <></>;
};

export default Logout;
