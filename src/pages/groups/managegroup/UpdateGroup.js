import React, { useState, useEffect } from "react";
import GroupForm from "./GroupForm";
import { useParams } from "react-router-dom";

const UpdateGroup = () => {
  const [group, setGroup] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    setGroup({
      name: "HR Manager",
      products: true,
      stores: true,
      brands: true,
      attributes: true,
      categorys: true,
    });
  }, [id]);
  return (
    <>
      <GroupForm group={group} />
    </>
  );
};

export default UpdateGroup;
