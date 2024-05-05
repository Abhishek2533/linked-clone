import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI.jsx";
import TopBar from "../components/common/TopBar/index.jsx";
import Profile from "../Pages/Profile.jsx";

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