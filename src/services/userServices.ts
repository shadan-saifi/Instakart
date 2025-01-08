import { ApiErrorInterface } from "@/types/ApiErrorInterface";
import { ApiResponseInterface } from "@/types/ApiResponseInterface";
import axios, { AxiosResponse } from "axios";


type ApiInterface=ApiResponseInterface | ApiErrorInterface
async function handleResponse(response: AxiosResponse<ApiInterface>): Promise<ApiInterface> {
    console.log("Current user response:", response);
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error(response?.data?.message || `Unexpected status code: ${response.status}`);
    }
}
export const getCurrentUser = async () => {
    const response:AxiosResponse<ApiInterface> =await axios.get('/api/current-user')
    return handleResponse(response)
}
export const logoutUser = async () => {
    const response:AxiosResponse<ApiInterface> =await axios.post('/api/log-out')
    return handleResponse(response)
}
