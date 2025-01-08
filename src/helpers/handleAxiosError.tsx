import { AxiosError } from "axios";
import { ApiErrorInterface } from "@/types/ApiErrorInterface";


// A utility function to handle all Axios errors
function handleAxiosError(error: AxiosError<ApiErrorInterface>): ApiErrorInterface {
     console.log(error);
     
    if (error?.response?.data?.message) {
      // Server responded with a status outside the 2xx range (e.g., 400, 500, etc.)
      // Extract and return the message from the server's response
      return error.response?.data || 'Something went wrong. Please try again.';
    } 
    // else if (error.request ) {
    //   // No response was received (e.g., network error, server downtime, CORS issues)
    //   return {
    //     statusCode: 0,
    //     message: error?.message || 'Network error. Please check your internet connection.',
    //     success:false
    //   } 
    // }
     else {
      // Request setup error (invalid URL, incorrect request configuration, etc.)
      //   This is where the "request setup error" is caught
        // This could happen when the request configuration is incorrect (e.g., wrong URL or headers), 
        // or if there's an issue setting up the request
        return {
          statusCode: 400,
          message:error?.message || 'Request setup error.',
          success:false
        } 
    }
  }
  
  export default handleAxiosError