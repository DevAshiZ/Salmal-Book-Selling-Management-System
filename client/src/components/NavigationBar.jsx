import React, { useState } from "react";
import logoImg from "../images/logo.svg";
import logoBnW from "../images/logoBnW.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  signInStart,
  signInSuccess,
  signInFailure,
  setErrorFalse,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Alert,
  Avatar,
  Checkbox,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import OAuth from "./OAuth";
import MiniHeader from "./accessories/MiniHeader";
import { MiniNavBar } from "./accessories/MiniNavBar";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography variant="small" color="white" className="font-medium">
        <Link to="/">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>
      <Typography variant="small" color="white" className="font-medium">
        <Link to="/about">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Offers
          </ListItem>
        </Link>
      </Typography>
      <Typography variant="small" color="white" className="font-medium">
        <Link to="/about">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            E books
          </ListItem>
        </Link>
      </Typography>
      <Typography variant="small" color="white" className="font-medium">
        <Link to="/about">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            About
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography variant="small" color="white" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}
//Icon for the error message
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

export function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openLogin, setOpenLogIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const { loading, error } = useSelector((state) => state.user); //this error and loading is from signUp
  const [SignUpError, setSignUpError] = useState(false);
  const [SignUpLoading, setSignUpLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [signUpFormData, setSignUpFormData] = useState({});
  const [signInFormData, setSignInFormData] = useState({});

  //functions to handle signin and signup buttons
  const handleOpenLogIn = () => {
    setOpenLogIn((cur) => !cur);
    if (openSignUp == true) {
      setOpenSignUp(false);
    }
  };
  const handleOpenSignUp = () => {
    setOpenSignUp((cur) => !cur);
    if (openLogin == true) {
      setOpenLogIn(false);
    }
  };

  //functions that handles on change in forms
  const handleChangeSignUp = (e) => {
    const { id, value } = e.target;

    setSignUpFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === "email" ? value.toLowerCase() : value, //lowercasing the email
    }));
  };

  const handleChangeSignIn = (e) => {
    setSignInFormData({ ...signInFormData, [e.target.id]: e.target.value });
  };

  //validation functions to not entering invalid inputs

  //validation to prevent user entering symbols except @
  const handleKeyPress = (e) => {
    // If the pressed key is not a letter, digit, or '@', prevent the default action
    if (!/[a-zA-Z0-9@]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleKeyPressName = (e) => {
    // If the pressed key is not a letter, digit, or '@', prevent the default action
    if (!/[a-zA-Z0-9@\- ]/.test(e.key)) {
      e.preventDefault();
    }
  };

  //functions that handles login and signup forms
  const handleSignUpSubmit = async (e) => {
    e.preventDefault(); // to prevent website refreshing when data is submitting
    try {
      setSignUpLoading(true);

      console.log("this works");
      // Check if passwords match
      if (signUpFormData.password.trim() !== signUpFormData.repassword.trim()) {
        setPasswordsMatch(false);
        setSignUpLoading(false);
        return;
      }

      const res = await axios.post("/api/auth/signup", signUpFormData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      if (openSignUp == true) {
        setOpenSignUp(false);
        setOpenLogIn(true);
      }
      setSignUpLoading(false);
      setSignUpError(false);
      // Reset password match state for next submission
      setPasswordsMatch(true);
    } catch (SignUpError) {
      setSignUpLoading(false);
      setSignUpError(true);
      console.error(SignUpError);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // to prevent website refreshing when data is submitting
    try {
      // setLoading(true);
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin", signInFormData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data));
      } else {
        dispatch(signInSuccess(data));
        navigate("/");
        if (openLogin == true) {
          setOpenLogIn(false);
        }
      }
    } catch (error) {
      console.error(error);
      dispatch(
        signInFailure(error.response?.data?.message || "An error occurred")
      );
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    if (error) {
      // Dispatch the action to reset the error state after a brief delay
      const timer = setTimeout(() => {
        dispatch(setErrorFalse());
      }, 3000); // Adjust the delay as needed

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }

    if (SignUpError) {
      // Dispatch the action to reset the error state after a brief delay
      const timer = setTimeout(() => {
        setSignUpError(false);
      }, 3000); // Adjust the delay as needed

      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [SignUpError, error, dispatch]);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <MiniHeader />
      {isHomePage && <MiniNavBar />}

      <header
        className="mx-auto max-w-screen px-4 py-2  "
        style={{ backgroundColor: "#191919" }}
      >
        <div className="flex items-center justify-between text-blue-gray-900 sticky px-4">
          {/* Left side for spacing */}
          <div className="flex-1"></div>

          {/* Desktop navigation */}
          <div
            className="hidden lg:block flex-1"
            style={{ marginLeft: "-425px" }}
          >
            <NavList className="flex justify-center" />
          </div>

          <div className="block lg:hidden flex-1">
            <img
              src={logoImg}
              alt="Mobile View"
              className="h-auto"
              style={{ width: "300px" }}
            />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="flex lg:hidden flex-1 justify-end mr-4">
            <IconButton onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>

          {/* User profile or login/signup buttons */}
          <div className="flex items-center gap-2">
            {currentUser ? (
              <div className="flex ">
                <div className="rounded-full mr-2 mt-1">
                  <Badge
                    content="0"
                    overlap="circular"
                    placement="top-end"
                    className="hidden"
                  >
                    <IconButton
                      size="sm"
                      variant="outlined"
                      color="white"
                      className="rounded-full "
                    >
                      <FontAwesomeIcon icon={faHeart} color="white" size="lg" />
                    </IconButton>
                  </Badge>
                </div>

                <div className="mr-5 mt-1">
                  <Badge
                    content="0"
                    overlap="circular"
                    placement="top-end"
                    className="hidden"
                  >
                    <IconButton
                      size="sm"
                      variant="outlined"
                      color="white"
                      className="rounded-full "
                    >
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        color="white"
                        size="lg"
                      />
                    </IconButton>
                  </Badge>
                </div>

                <Link to="/profile">
                  <div className="flex ">
                    <Avatar
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="mr-2"
                      size="sm"
                    />
                    <div className="flex-col">
                      <span
                        className="text-white text-xs "
                        style={{ lineHeight: "1" }}
                      >
                        Hello,
                      </span>
                      <Typography
                        className="text-white text-sm font-semibold"
                        style={{ lineHeight: "0.5" }}
                      >
                        {currentUser.name.split(" ")[0]}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex gap-2">
                <Button
                  variant="text"
                  size="sm"
                  color="white"
                  onClick={handleOpenLogIn}
                >
                  Log In
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  color="white"
                  onClick={handleOpenSignUp}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile navigation menu */}
        <Collapse open={openNav}>
          <div>
            <NavList />

            {/* Mobile login/signup buttons */}
            {!currentUser && (
              <div>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                  )}
                </IconButton>
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                  <Button
                    variant="outlined"
                    size="sm"
                    color="blue-gray"
                    fullWidth
                    onClick={handleOpenLogIn}
                  >
                    Log In
                  </Button>
                  <Button
                    size="sm"
                    style={{ backgroundColor: "white", color: "black" }}
                    onClick={handleOpenSignUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Collapse>

        {/* To handle Login Button */}
        <Dialog
          size="xs"
          open={openLogin}
          handler={handleOpenLogIn}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <form onSubmit={handleLoginSubmit}>
              <CardBody className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Typography variant="h4" color="blue-gray">
                    Sign In
                  </Typography>
                  <img src={logoBnW} className="w-32" />
                </div>
                <Typography
                  className="font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your email and password to Sign In.
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Your Email
                </Typography>
                <Input
                  id="email"
                  label="email"
                  type="email"
                  onKeyPress={handleKeyPress}
                  required
                  onChange={handleChangeSignIn}
                />
                <Typography className="-mb-2" variant="h6">
                  Your Password
                </Typography>
                <Input
                  id="password"
                  label="password"
                  type="password"
                  onChange={handleChangeSignIn}
                />

                {error && (
                  <Alert
                    icon={<Icon />}
                    className="rounded-none border-l-4 border-[#c9402e] bg-[#c9402e]/10 font-medium text-[#c9402e] mt-2"
                  >
                    {error || "Error Login with the System. Retry"}
                  </Alert>
                )}
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  disabled={loading}
                  className="uppercase"
                  variant="gradient"
                  type="submit"
                  fullWidth
                >
                  {loading ? "Login In..." : "Sign In"}
                </Button>
                <OAuth />
                <Typography
                  variant="small"
                  className="mt-4 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    onClick={handleOpenSignUp}
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </form>
          </Card>
        </Dialog>

        {/* To handle SignUp Button */}
        <Dialog
          size="xs"
          open={openSignUp}
          handler={handleOpenSignUp}
          className="bg-transparent shadow-none overflow-scroll"
        >
          <Card className="mx-auto w-full">
            <form onSubmit={handleSignUpSubmit}>
              <CardBody className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Typography variant="h4" color="blue-gray">
                    Sign Up
                  </Typography>
                  <img src={logoBnW} className="w-32" />
                </div>
                <Typography
                  className=" font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your details to register with us!
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Typography className="mb-1" variant="h6">
                      Your Name
                    </Typography>
                    <Input
                      label="Name"
                      id="name"
                      onKeyPress={handleKeyPressName}
                      onChange={handleChangeSignUp}
                    />
                  </div>
                  <div>
                    <Typography className="mb-1" variant="h6">
                      User Name
                    </Typography>
                    <Input
                      label="User Name"
                      id="username"
                      onKeyPress={handleKeyPressName}
                      onChange={handleChangeSignUp}
                    />
                  </div>
                  <div>
                    <Typography className="mb-1" variant="h6">
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      label="Email"
                      id="email"
                      onKeyPress={handleKeyPress}
                      onChange={handleChangeSignUp}
                    />
                  </div>
                  <div>
                    <Typography className="mb-1" variant="h6">
                      Your Age
                    </Typography>
                    <Input
                      type="text"
                      label="Age"
                      id="age"
                      onKeyPress={handleKeyPressName}
                      onChange={handleChangeSignUp}
                    />
                  </div>
                  <div>
                    <Typography className="mb-1" variant="h6">
                      Enter Password
                    </Typography>
                    <Input
                      type="password"
                      label="Password"
                      id="password"
                      onChange={handleChangeSignUp}
                    />
                  </div>
                  <div>
                    <Typography className="mb-1" variant="h6">
                      Re-Enter Password
                    </Typography>
                    <Input
                      type="password"
                      label="Password"
                      id="repassword"
                      onChange={handleChangeSignUp}
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  type="submit"
                  fullWidth
                  disabled={SignUpLoading}
                  className="uppercase"
                >
                  {SignUpLoading ? "Loading " : "Sign Up"}
                </Button>
                <OAuth />
                {SignUpError && (
                  <Alert
                    icon={<Icon />}
                    className="rounded-none border-l-4 border-[#c9402e] bg-[#c9402e]/10 font-medium text-[#c9402e] mt-2"
                  >
                    User Registeration Error. Retry.
                  </Alert>
                )}
                {!passwordsMatch && (
                  <>
                    <Alert
                      icon={<Icon />}
                      className="rounded-none border-l-4 border-[#c9402e] bg-[#c9402e]/10 font-medium text-[#c9402e] mt-2"
                    >
                      Password do not match. please re-enter
                    </Alert>
                  </>
                )}
              </CardFooter>
            </form>
          </Card>
        </Dialog>
      </header>
    </div>
  );
}
