import { ApiResponseInterface } from "@/types/ApiResponseInterface";

export class ApiResponse<T=any> implements ApiResponseInterface<T>{
    constructor(
        public statusCode:number,
        public message:string,
        public data?:T,
        public success:boolean=statusCode<400
    ){ }
     // Custom toJSON method for serialization
     toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
            success: this.success,
        };
    }
}
// export const apiResponse = <T>(success: boolean, message: string, data?: T): ApiResponse<T> => {
//     return {
//         success,
//         message,
//         data
//     }
// }