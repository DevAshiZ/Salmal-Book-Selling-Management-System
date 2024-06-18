import User from "../models/users.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
    //next(errorHandler(300,"Something went wrong")) //this way we can pass the customed error
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401, "User Not Found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }
    //create a token to have user info(this should be unique so im using ID which auto created by the database)
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //removing password from the client side. it should not be sent
    const { password: hashPassword, ...rest } = validUser._doc;

    //next we're going to save that token in to a cookie
    //set a timer to how long cookie should be stay
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //if the user is in the database
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); //1hr
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      //if the user is not in the database
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000).toString(),
        name: req.body.name,
        password: hashPassword,
        email: req.body.email,
        profilePicture: req.body.photo,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); //1hr
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
