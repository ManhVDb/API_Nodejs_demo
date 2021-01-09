const {createUser,getUserById,getUser,deleteUserById,updateUser}= require("./user.controller");

const router= require("express").Router();

router.post("/",createUser);
//console.log("getUserByID"+getUserById);
router.get("/:id",getUserById);
router.get("/",getUser);
router.patch("/",updateUser);
router.delete("/:id",deleteUserById);
module.exports= router;