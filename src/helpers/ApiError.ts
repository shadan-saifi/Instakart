import { ApiErrorInterface } from '@/types/ApiErrorInterface'


export class ApiError extends Error implements ApiErrorInterface {
   
    constructor(
       public statusCode: number,
       public message: string = "Something went wrong",
       public errors: string[] = [],
       public data:any=null,
       public stack?: string,
       public success = false,

    ) {
        super(message); 
        
        if (stack) {
            this.stack = stack;
        } else {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);  //invoking Error class constructor
            }
        }
    }
    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message, // Ensure the message is included
            errors: this.errors,
            data: this.data,
            success: this.success,
            stack: this.stack,  // Include the stack trace, though you might want to exclude this in production
        };
    }
}

