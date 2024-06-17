import React, { useState } from "react";
import logoImg from "../images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";

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
  Checkbox,
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
      <a href="#" key={key}>
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
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <Link to="/">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [signUpFormData, setSignUpFormData] = useState({});

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

  const handleChangeSignUp = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.id]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault(); // to prevent website refreshing when data is submitting
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/signup", signUpFormData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  // //THIS METHOD IS FETCH METHOD TO HANDLE REQUESTS
  // const handleSignUpSubmit = async (e) => {
  //   e.preventDefault(); //to prevent website refreshing when data is submitting
  //   const res = await fetch("/api/auth/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(signUpFormData),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div
      className="mx-auto max-w-screen px-4 py-2 mb-5"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src={logoImg}
          alt="Logo"
          style={{ width: "150px", height: "auto" }}
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
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
      </div>
      <Collapse open={openNav}>
        <NavList />
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
            Sign In
          </Button>
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
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpenLogIn} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpenSignUp}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
      {/* To handle SignUp Button */}
      <Dialog
        size="xs"
        open={openSignUp}
        handler={handleOpenSignUp}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <form onSubmit={handleSignUpSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your details to register with us!
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Typography className="mb-2" variant="h6">
                    Your Name
                  </Typography>
                  <Input
                    label="Name"
                    id="name"
                    size="sm"
                    onChange={handleChangeSignUp}
                  />
                </div>
                <div>
                  <Typography className="mb-2" variant="h6">
                    User Name
                  </Typography>
                  <Input
                    label="User Name"
                    size="sm"
                    id="username"
                    onChange={handleChangeSignUp}
                  />
                </div>
                <div>
                  <Typography className="mb-2" variant="h6">
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    label="Email"
                    size="sm"
                    id="email"
                    onChange={handleChangeSignUp}
                  />
                </div>
                <div>
                  <Typography className="mb-2" variant="h6">
                    Enter Password
                  </Typography>
                  <Input
                    type="password"
                    label="Password"
                    size="sm"
                    id="password"
                    onChange={handleChangeSignUp}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Typography className="mb-2" variant="h6">
                    Re-Enter Password
                  </Typography>
                  <Input
                    type="password"
                    label="Password"
                    size="sm"
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
                disabled={loading}
                className="uppercase"
              >
                {loading ? "Loading " : "Sign Up"}
              </Button>
              {error && (
                <Alert
                  icon={<Icon />}
                  className="rounded-none border-l-4 border-[#c9402e] bg-[#c9402e]/10 font-medium text-[#c9402e] mt-2"
                >
                  User Registeration Error. Retry.
                </Alert>
              )}
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </div>
  );
}
