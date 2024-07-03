import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export default function AdminDashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
  }, [location.search]);
  return (
    <div>
      {/* SideBar */}
      <div className="">
        <SideBar />
      </div>
      {/* Profile */}
      <div className=""></div>
    </div>
  );
}
