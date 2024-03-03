class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

export {ApiResponse}

// informaional response is 100-199
// successful response 200-299
//redirection message 300-399
//client errro message  400-499
//server error responses 500-599