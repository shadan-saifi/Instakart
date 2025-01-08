import handleAxiosError from "@/helpers/handleAxiosError";
import { logoutUser } from "@/services/userServices";
import { logout } from "@/store/authSlice";
import { ApiErrorInterface } from "@/types/ApiErrorInterface";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";



function LogoutBtn(){
    const dispatch=useDispatch()
    const router=useRouter()
    const logoutHandler=async()=>{
       try {
         const response=await logoutUser()
         if(response.success===true){
            dispatch(logout())
            router.push("/")
         }
       } catch (error) {
        const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);
        // const errorMessage = response?.message
        console.log("Error getting current user", response);
        dispatch(logout());
      } 
    }

    return (
        <button onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn