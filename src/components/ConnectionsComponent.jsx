import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI.jsx";
import ConnectedUsers from "./common/ConnectedUsers/index.jsx";
import "../Sass/ConnectionsComponent.scss";

export default function ConnectionsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <ConnectedUsers
          key={user.id}
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
    </div>
  ) : (
    <div className="connections-main">No Connections to Add!</div>
  );
}