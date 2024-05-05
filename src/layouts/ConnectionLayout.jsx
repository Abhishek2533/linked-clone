import React, { useMemo, useState } from "react";
import Connections from "../Pages/Connections.jsx";
import { getCurrentUser } from "../api/FirestoreAPI.jsx";
import TopBar from "../components/common/TopBar/index.jsx";

export default function ConnectionLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Connections currentUser={currentUser} />
    </div>
  );
}