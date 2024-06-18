import React from "react";
import { SideBar } from "../components/SideBar";
import {
  Card,
  Dialog,
  CardBody,
  CardFooter,
  Input,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="main-layout">
      <SideBar />
      <div className="inner-layout flex justify-center">
        <div>
          <Typography variant="h4" color="blue-gray" className="text-center">
            My Profile
          </Typography>
          <Card className="w-96 items-center mt-5 pt-5">
            <Avatar
              size="xxl"
              src={currentUser.profilePicture}
              alt="profile-picture"
            />

            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray">
                {currentUser.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-semibold text-sm"
                textGradient
              >
                @{currentUser.username}
              </Typography>
              <div className="text-left">
                <Typography variant="h6" color="blue-gray" className="mt-2">
                  Email:{" "}
                  <span className="font-normal ">{currentUser.email}</span>
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  CreatedAt:{" "}
                  <span className="font-normal ">{currentUser.createdAt}</span>
                </Typography>
              </div>
              <Button fullWidth className="mt-3" onClick={handleOpen}>
                Update Profile
              </Button>
            </CardBody>
          </Card>
          <div className="mt-3 inline-flex gap-32">
            <Button color="red">Delete Account</Button>
            <Button color="green">Sign Out</Button>

            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
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
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
