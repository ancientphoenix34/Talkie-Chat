const express=require('express');

const {registerUser,loginUser,getAllUsers}=require('../Controllers/UserControllers');

const router=express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/allusers',getAllUsers);



module.exports=router;