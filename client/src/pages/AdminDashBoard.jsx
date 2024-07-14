import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdminSideBar } from "../components/admin-dashboard/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile";
import { signOut } from "../redux/user/userSlice";

export default function AdminDashBoard() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="main-layout">
      <AdminSideBar />

      <div className="w-screen">
        {/*NavBar */}
        <div className="justify-between inline-flex bg-gray-900 h-14  px-3 py-2 items-center w-full">
          <div>
            {/*Search Bar*/}
            <div className="inline-flex relative w-full gap-2 md:w-max mr-5">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <div className="!absolute left-3 top-[10px]">
                <FontAwesomeIcon icon={faSearch} color="white" size="sm" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center">
            <IconButton
              size="sm"
              className="rounded-full mr-3 bg-white bg-opacity-20"
            >
              <FontAwesomeIcon color="white" icon={faBell} size="lg" />
            </IconButton>
            <Avatar
              size="sm"
              src={currentUser.profilePicture}
              alt="profile-img"
            />
            <div className="justify-items-center mb-2">
              <Typography
                className="ml-2 opacity-95 font-bold"
                style={{ fontSize: "12px", letterSpacing: "0.5px" }}
                color="white"
              >
                {currentUser.userType}
              </Typography>
              <Typography
                className="ml-2 opacity-85"
                style={{ fontSize: "10px", lineHeight: "1.5px" }}
                color="white"
              >
                @{currentUser.username}{" "}
              </Typography>
            </div>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <IconButton
                  size="sm"
                  variant="outlined"
                  color="white"
                  className="border-none ml-3 bg-white bg-opacity-20"
                >
                  <FontAwesomeIcon icon={faCog} color="white" size="lg" />
                </IconButton>
              </PopoverHandler>
              <PopoverContent className="w-72 bg-gray-900 rounded-none border-none ml-5">
                <div className="mb-4 flex items-center gap-4 border-b border-gray-800 pb-4">
                  <Avatar src={currentUser.profilePicture} alt="profile-img" />
                  <div>
                    <Typography
                      variant="h6"
                      color="white"
                      className="opacity-90"
                      style={{ lineHeight: "1" }}
                    >
                      {currentUser.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-white opacity-80"
                    >
                      {currentUser.userType}
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  {location.pathname !== "/admin-dashboard" && (
                    <Link to="/admin-dashboard">
                      <ListItem
                        className="text-white opacity-80 hover:bg-gray-800 hover:text-gray-300"
                        style={{ fontSize: "15px" }}
                      >
                        <ListItemPrefix>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            />
                          </svg>
                        </ListItemPrefix>
                        DashBoard
                      </ListItem>
                    </Link>
                  )}
                  {location.pathname !== "/admin-dashboard?tab=profile" && (
                    <Link to="/admin-dashboard?tab=profile">
                      <ListItem
                        className="text-white opacity-80 hover:bg-gray-800 hover:text-gray-300"
                        style={{ fontSize: "15px" }}
                      >
                        <ListItemPrefix>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </ListItemPrefix>
                        Profile
                      </ListItem>
                    </Link>
                  )}

                  <ListItem
                    onClick={handleSignOut}
                    className="text-white opacity-80 hover:bg-gray-800 hover:text-gray-300"
                    style={{ fontSize: "15px" }}
                  >
                    <ListItemPrefix>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                        />
                      </svg>
                    </ListItemPrefix>
                    Sign Out
                  </ListItem>
                </List>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/*Content*/}
        <div className="inner-layout h-auto">
          {tab === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}
