import React, { useMemo, useState } from "react";
import Connections from "../Pages/Connections";
import { getCurrentUser } from "../api/FirestoreAPI";
import TopBar from "../components/common/TopBar";

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