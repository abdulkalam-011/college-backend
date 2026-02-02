import mongoose, { Schema } from "mongoose";
import { token } from "morgan";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 64,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      index: true,
      minLength: 10,
      maxLength: 15,
    },
    avatar: {
      type: String, // cludiniry url
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "SUSPENDED"],
      default: "ACTIVE",
    },
    isemailverified: {
      type: Boolean,
      default: false,
    },
    lastLoginAt: {
      type: Date,
    },
    passwordRefreshToken: {
      type: String,
    },
    passwordRefreshTokenExpiry: {
      type: Date,
    },
    twofactorenabled: {
      type: Boolean,
      default: false,
    },
    twofactorsecret: {
      type: String,
    },

    refreshTokens: [
      {
        token: {
          type: String,
        },
        expiry: { type: Date },
        device: { type: String },
        ipAddress: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
