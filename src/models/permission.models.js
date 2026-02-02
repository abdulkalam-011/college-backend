import mongoose, { Schema } from "mongoose";

const permissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["USERS:CREATE", "STUDENTS:READ"],
      dafault: "USERS:CREATE",
    },
    resources: {
      type: String,
      enum: ["USERS", "STUDENTS", "COURSES"],
      default: "USERS",
      required: true,
    },
    action: {
      type: String,
      enum: ["CREATE", "READ", "UPDATE", "DELETE"],
      required: true,
    },
    description: {
      type: String,
    },
    scope: {
      type: String,
      enum: ["ALL", "OWN", "DEPARTMENT"],
    },
  },
  { timestamps: true }
);

export const Permission = mongoose.model("Permission", permissionSchema);
