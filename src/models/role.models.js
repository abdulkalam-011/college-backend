import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema(
  {
    name: {
      type: String,
      enum: ["ROOT", "ADMIN", "USER", "PRINCIPAL", "TEACHER", "STUDENT", "HOD"],
      required: true,
      default: "USER",
      index: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    hierarchyLevel: {
      type: Number,
      required: true,
      index: true,
    },
    permissions: {
      type: Schema.Types.ObjectId,
      ref: "Permission",
      required: true,
    },
    issystemRole: {
      type: Boolean,
      default: false,
    },
    isactive: {
      type: Boolean,
      default: true,
    },
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

export const Role = mongoose.model("Role", roleSchema);
