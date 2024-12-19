const express = require('express')
const app = express()
const route = require('./routes/routes')
app.use('/api',route)


// ->/api/student
// ->/api/admin

const port = 3000

// loading middleware into the app
app.use(express.json())



// "ORDER IS IMPORTENT"
// middleware -loggin,auth,validation
const logginMiddleware = function(req,res,next){
    console.log("Loggin kr rha hu ");
    next();
}
app.use(logginMiddleware);


const authMiddleware = function(req,res,next){
    console.log('auth kr rha hu');
    next();
}
app.use(authMiddleware);


const validationMiddleware = function(req, res, next){
    console.log('validation kr rha hu');
    // next();
    res.send("chalo seedha ghar")
}
app.use(validationMiddleware);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    console.log("main route handler hu");
    console.log(req.body);
    res.send('<h1>Hello World!</h1>')
})


app.listen(port,()=>{
    console.log(`sever is running at ${port}`);
})