const {create,getUser,getUserById,updateUser,deleteUserById}= require("./user.service");
const {genSaltSync,hashSync}=require("bcrypt");

// const saltRounds = 10;
// const bcrypt =require("bcrypt");

module.exports={
    createUser:(req, res) =>{
        const body = req.body;
        const salt =genSaltSync(10);
        body.password =hashSync('123456789', salt);

        create(body, (err, results) =>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync('123456789', salt);
        // body.password=hash(body.password,salt);
        // console.log("body",body)
        // return res.status(200).json({
        //             success: 1,
        //             data: {}
        //         });
    },
    getUserById:(req, res)=>{
        const id =req.params.id;
     //   console.log("id truyền vào là: "+id);
        getUserById(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "record not Found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUser:(req,res)=>{
        getUser((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUser:(req,res)=>{
        const body = req.body;
        const salt =genSaltSync(10);
        body.password =hashSync('123456789', salt);

        updateUser(body, (err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteUserById:(req,res)=>{
        const id =req.params.id;
        console.log("id truyền vào là: "+id);
        deleteUserById(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                console.log("Kết quả là: "+results);
                return res.json({
                    success: 0,
                    message: "record not Found"
                });
                    
            }
            
            return res.json({
                success: 1,
                message: "user delete successfully"
            });
        });
    }
};