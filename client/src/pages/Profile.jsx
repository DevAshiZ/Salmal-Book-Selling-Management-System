import React, { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { useRef } from "react";
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
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress)); //to display image Percent when uploading
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

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
                <form>
                  <CardBody className="flex flex-col gap-4">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="text-center"
                    >
                      Update Profile
                    </Typography>

                    <input
                      type="file"
                      ref={fileRef}
                      hidden
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <div className="flex justify-center">
                      <Avatar
                        size="xxl"
                        onClick={() => fileRef.current.click()}
                        src={
                          formData.profilePicture || currentUser.profilePicture
                        }
                        alt="profile-picture"
                      />
                    </div>
                    <Typography className="text-sm self-center">
                      {imageError ? (
                        <span className="text-red-700">
                          Error Uploading Image(File size must be less than 2MB)
                        </span>
                      ) : imagePercent > 0 && imagePercent < 100 ? (
                        <span className="text-gray-900">
                          {`Uploading Image... ${imagePercent}%`}
                        </span>
                      ) : imagePercent === 100 ? (
                        <span className="text-green-700">
                          Image Uploaded Successfully.
                        </span>
                      ) : (
                        ""
                      )}
                    </Typography>

                    <Typography className="-mb-2" variant="h6">
                      Your Username
                    </Typography>
                    <Input label="username" size="lg" />
                    <Typography className="-mb-2" variant="h6">
                      Your Email
                    </Typography>
                    <Input label="email" size="lg" />
                    <Typography className="-mb-2" variant="h6">
                      Your Password
                    </Typography>
                    <Input label="password" size="lg" />
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button type="submit" variant="gradient" fullWidth>
                      Sign In
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
