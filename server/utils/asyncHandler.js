// Define a function called asyncHandler that takes an asynchronous function (fn) as an argument
const asyncHandler = (fn) => async (req, res, next) => {
    try {
      // Try to execute the provided asynchronous function
      fn(req, res, next);
    } catch (error) {
      // If an error occurs, handle it by sending an error response
      res.status(err.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  // Export the asyncHandler function as the default export
  export default asyncHandler;
  