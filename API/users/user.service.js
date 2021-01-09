const pool= require("../../config/dataBase");

module.exports={
    create: (data, callback) =>{
        pool.query(
            `insert into account(username, password) values(?,?)`,
            [
                data.username,
                data.password
            ],
            (error, results , fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getUser: callback=>{
        pool.query(
            `select * from account`,
            [],
            (error, results , fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getUserById: (id,callback)=>{
        pool.query(
            `select id,username,password from account where id = ?`,
            [id],
          //  console.log("id nhận: "+id),
            (error, results , fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    updateUser: (data, callback) =>{
        pool.query(
            `update account set username=?, password=? where id=?`,
            [
                data.username,
                data.password,
                data.id
            ],
            (error, results , fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteUserById: (id,callback)=>{
        pool.query(
            `delete from account where id = ?`,
            [id],
            console.log("id nhận: "+id),
            (error, results , fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null, results[0]);
            }
        )
    }
}