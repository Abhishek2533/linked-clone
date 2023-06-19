import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import TopBar from "../components/common/TopBar";
import Profile from "../Pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Profile currentUser={currentUser} />
    </div>
  );
}