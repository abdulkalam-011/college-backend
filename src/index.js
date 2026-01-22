import 'dotenv/config';
import {app}from './app.js';
import { connectDB } from './configs/db.js';
import { connectClodinary } from './configs/cloudiniry.js';

const PORT = process.env.PORT || 3000;

// await connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   }); 
// }).catch((error) => {
//   console.error("Failed to start server: ", error);
// });
connectClodinary();

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});