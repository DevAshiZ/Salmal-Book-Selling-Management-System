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
  Alert,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} from "../redux/user/userSlice";

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ErrorIcon() {
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

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // console.log(formData);

  useEffect(() => {
    if (updateSuccess) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
    if (image) {
      handleFileUpload(image);
    }
  }, [image, updateSuccess]);

  //function to handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //function to handle image upload
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

  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axios.post(
        `/api/user/update/${currentUser._id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = res.data;
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      console.log("updated successfully: ", data);
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(
        updateUserFailure(error.response?.data?.message || "An error occurred")
      );
    }

    setOpen(false);
  };

  return (
    <div className="main-layout">
      <SideBar />
      <div className="inner-layout flex justify-center">
        <div>
          {showAlert && (
            <Alert
              icon={<SuccessIcon />}
              className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
            >
              Profile Updated Successfully.
            </Alert>
          )}
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
                <form onSubmit={handleSubmit}>
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
                    <Input
                      id="username"
                      label="username"
                      size="lg"
                      defaultValue={currentUser.username}
                      onChange={handleChange}
                    />
                    <Typography className="-mb-2" variant="h6">
                      Your Email
                    </Typography>
                    <Input
                      id="email"
                      label="email"
                      type="email"
                      size="lg"
                      defaultValue={currentUser.email}
                      onChange={handleChange}
                    />
                    <Typography className="-mb-2" variant="h6">
                      Your Password
                    </Typography>
                    <Input
                      type="password"
                      id="password"
                      label="password"
                      size="lg"
                      onChange={handleChange}
                    />
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button
                      type="submit"
                      variant="gradient"
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Update Profile"}
                    </Button>
                    {error && (
                      <Alert
                        icon={<ErrorIcon />}
                        className="rounded-none border-l-4 border-[#c9402e] bg-[#c9402e]/10 font-medium text-[#c9402e] mt-2"
                      >
                        {error || "Error Updating User. Retry"}
                      </Alert>
                    )}
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
