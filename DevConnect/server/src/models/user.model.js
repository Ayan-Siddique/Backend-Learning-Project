import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from '../configs/env.js'

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is require"],
      unqiue: [true, "username must be unqiue"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "username is require"],
      unqiue: [true, "username must be unqiue"],
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      required: [true, "username is require"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "username is require"],
      trim: true,
    },
    role: {
      type: String,
      emun: ["user", "admin"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if(!this.isModified("password"))
    return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash
});

userSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
}

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      id: this._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.REFRESH_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateAccessToken = async function () {
   return jwt.sign(
    {
      id:this._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.ACCESS_TOKEN_EXPIRY
    }
  )
}


const UserModel = mongoose.model("User", userSchema);

export default UserModel;
