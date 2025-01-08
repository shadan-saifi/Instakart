

export interface ApiResponseInterface< T=any > {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
}