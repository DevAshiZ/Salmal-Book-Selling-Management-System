import { Button } from "@material-tailwind/react";
import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const userDetails = {
        name: result.user.displayName,
        username: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
      const res = await axios.post("/api/auth/google", userDetails, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      dispatch(signInSuccess(data));

      console.log("User logged in and data sent to server", res.data);
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("Error response data: ", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request: ", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("General error: ", error.message);
      }
    }
  };

  return (
    <Button
      type="button"
      color="red"
      fullWidth
      className="mt-2"
      onClick={handleGoogleClick}
    >
      Continue With Google
    </Button>
  );
}
