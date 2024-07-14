import React, { useEffect, useState } from "react";
import logoImg from "../../images/logo.svg";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function AdminSideBar() {
  const [open, setOpen] = React.useState(0);

  const listItems = [
    "Best Sellers",
    "New Arrival",
    "Offers",
    "Office Stationary",
    "Bundle Offers",
    "Authors",
    "Publishers",
    "Gift Vouchers",
    "School Book Lists",
  ];

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Card className="h-screen max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-gray-900">
      <div className="mb-2 flex-col items-center gap-4 p-4">
        <img src={logoImg} alt="brand" className="h-auto w-36" />
      </div>
      <List>
        <Link to="/admin-dashboard?tab=profile">
          <ListItem
            selected={tab === "profile"}
            className={`w-48 text-center justify-start text-white hover:bg-gray-800 hover:text-gray-300 text-sm opacity-80 hover:opacity-95 ${
              tab === "profile" ? "bg-gray-800 text-gray-300" : ""
            }`}
          >
            Profile
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
