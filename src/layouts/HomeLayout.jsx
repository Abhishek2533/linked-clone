import React, { useMemo, useState } from "react";
import Home from "../Pages/Home.jsx";
import { getCurrentUser } from "../api/FirestoreAPI.jsx";
import TopBar from "../components/common/TopBar/index.jsx";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Home currentUser={currentUser} />
    </div>
  );
}