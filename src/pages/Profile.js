import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { login } = useSelector(({ login }) => login);

  return <div>{login}</div>;
};

export default Profile;
