Next let's work on the exception middleware, create two new folders in api named Errors & Middleware,
inside Errors create a class named ApiException with the following code:
    public class ApiException
    {
        public ApiException(int statusCode, string message = null, string details = null) 
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }

and inside Middleware create a class named EceptionMiddleware with the following code:
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMiddleware> logger;
        private readonly IHostEnvironment env;


        public ExceptionMiddleware(
            RequestDelegate next,
            ILogger<ExceptionMiddleware> logger,
            IHostEnvironment env
        ) {
            this.next = next;
            this.logger = logger;
            this.env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await next(context);
            } 
            catch (Exception ex) 
            {
                logger.LogError(ex, ex.Message);
                context.Request.ContentType = "application/json";
                //context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = env.IsDevelopment()
                    ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace.ToString())
                    : new ApiException(context.Response.StatusCode, "Internal Server Error");

                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }
        }
    }

and finally use it in startup.cs by adding it at the beginning of the configure method:
app.UseMiddleware<ExceptionMiddleware>();

