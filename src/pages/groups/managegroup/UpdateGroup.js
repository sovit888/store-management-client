import React, { useState, useEffect } from "react";
import GroupForm from "./GroupForm";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UpdateGroup = () => {
  const [group, setGroup] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/group/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setGroup(result.data.group);
      })
      .catch((error) => {
        history.goBack("/group/all");
      });
  }, [id, history]);
  return (
    <>
      <GroupForm group={group} id={id} history={history} />
    </>
  );
};

export default UpdateGroup;
