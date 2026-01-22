
import { v2 as cloudinary } from 'cloudinary';

const connectClodinary = async () => {
try {
 await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  console.log("Cloudinary configured"); 
} catch (error) {
  console.error("Cloudinary configuration error: ", error);
}
} 

export { connectClodinary };