import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "change me later",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1718686633~exp=1718687233~hmac=a8b93be2ef7fa590164777a70bca88cae852adbd7e0f914c9acd7a746fa0aaa8",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
