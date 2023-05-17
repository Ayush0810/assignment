// Import the Express application from the app.js file
import app from "./app.js"; 
// Import the connectDB function from the db.js file
import { connectDB } from "./config/db.js";

// Connect to the database using the connectDB function
connectDB(); 

// Start the server and listen on the specified port
app.listen(process.env.PORT, function() {
  console.log("app is listening at port", process.env.PORT);
});
