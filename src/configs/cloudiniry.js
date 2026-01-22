import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  try {
    const clodinaryConn = cloudinary.config({
      cloud_name: `${process.env.CLODINIARY_CLOUD_NAME}`,
      api_key: `${process.env.CLODINIARY_API_KEY}`,
      api_secret: `${process.env.CLODINIARY_API_SECRET}`,
    });
    const result = await cloudinary.api.ping();
    console.log("Cloudinary connected:", result);
  } catch (error) {
    console.error("Cloudinary connection error:", error);
  }
};

export { connectCloudinary };
