export const sendToken = (res, user, message, statusCode = 200) => {
	// Generate a JSON Web Token (JWT) for the user
	const token = user.getJWTToken();
  
	// Set options for the token cookie
	const options = {
	  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expires in 15 days
	  httpOnly: true, // The token is accessible only by the server
	};
  
	// Set the token cookie in the response and send the JSON response
	return res
	  .status(statusCode)
	  .cookie("token", token, options) // Set the token cookie
	  .json({
		success: true,
		message,
		user,
		token,
	  });
  };
  