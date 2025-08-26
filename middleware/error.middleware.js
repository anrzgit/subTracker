const errorMiddleware = (err, req, res, next) => {
    try {
        let error = {...err};
        error.message = err.message;
        console.error(error);

        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            error.message = messages.join(', ');
            error.statusCode = 400;
        }

        if(err.code && err.code === 11000){
            const field = Object.keys(err.keyValue);
            error.message = `Duplicate value entered for ${field} field, please choose another value`;
            error.statusCode = 400;
        }

        if(err.message === 'NotFoundError') {
            error.message = 'Resource Not Found';
            error.statusCode = 404;
        }

        if(err.message === 'SomeOtherError') {
            error.message = 'Some Other Error Occurred';
            error.statusCode = 400;
        }
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || 'Server Error'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message || 'Server Error'
        });
    }
};

export default errorMiddleware;
