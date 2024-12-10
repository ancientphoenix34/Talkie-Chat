const express=require('express');

const {registerUser,loginUser,getAllUsers}=require('../Controllers/UserControllers');
const {protect}=require('../Middleware/authMiddleware');
const router=express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/allusers',protect,getAllUsers);



module.exports=router;