import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleUser } from "../config/api";

const UserPage = () => {
  const id = useParams();
  const [user, setUser] = useState("");

  const fetchUser = async () => {
    const { data } = await axios.get(SingleUser(id));

    setUser(data.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 35,
      }}
    >
      <img
        src={user.avatar}
        alt={user.email}
        style={{
          height: 200,
          borderRadius: "50%",
          marginBottom: 25,
          border: "3px solid #99CD4E",
          padding: "5px",
        }}
      />
      <h1 style={{ marginBottom: 25, color: "white" }}>
        {" "}
        {user.first_name} {user.last_name}
      </h1>
      <h1 style={{ marginBottom: 25, color: "white" }}>{user.email}</h1>
    </div>
  );
};

export default UserPage;
