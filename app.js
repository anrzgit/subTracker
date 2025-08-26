import express from 'express';
import {PORT} from './config/env.js' 
 
const app = express();


app.get('/',(req, res, next) => {
    res.send("<h1>Hi</h1>")
});


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    
})

export default app;