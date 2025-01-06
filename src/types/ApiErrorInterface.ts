export interface ApiErrorInterface {
    statusCode: number;
    message: string    
    success: boolean;
    errors?: string[];
    data?: any;
    stack?: string 
}