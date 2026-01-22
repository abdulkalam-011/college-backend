import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./configs/db.js";
import { connectCloudinary } from "./configs/cloudiniry.js";


const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV == "production") {
  console.log("Running in production mode");
  connectCloudinary();
}

await connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server: ", error);
  });
