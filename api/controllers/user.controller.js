import User from "../models/users.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

// export const test = (req, res) => {
//   res.json({
//     message: "API is working!",
//   });
// };

//update user
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only update your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          username: req.body.username,
          address: req.body.address,
          age: req.body.age,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.phone_number,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true } //update with the new values
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

//delete user
export const deleteUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    return next(errorHandler(401, "You can only delete your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};
