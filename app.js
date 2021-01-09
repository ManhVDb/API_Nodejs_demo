require("dotenv").config();
const express =require("express");
const app =express();
const userRouter =require("./API/users/user.router");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// app.get("/api", (req,res) =>{
//     res.json({
//         success: 1,
//         mesenge: "this is rest apis working"
//     });
// });
app.use(express.json());

app.use("/api/users",userRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on PORT: ",process.env.APP_PORT);
});