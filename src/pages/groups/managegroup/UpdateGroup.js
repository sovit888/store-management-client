import React, { useState, useEffect } from "react";
import GroupForm from "./GroupForm";
import { useHistory, useParams } from "react-router-dom";
import authAxios from "../../../utils/authAxios";

const UpdateGroup = () => {
  const [group, setGroup] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    authAxios
      .get(`/group/${id}`)
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
