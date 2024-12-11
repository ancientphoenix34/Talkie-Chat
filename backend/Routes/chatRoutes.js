const express=require('express');
const {protect}=require('../Middleware/authMiddleware')



const router=express.Router();

// router.post('/accesschat',accessChat);
// router.get('/fetchchats',fetchChats);
// router.post('/creategroup',createGroupChat);
// router.put('/renamegroup',renameGroup);
// router.put('/removefromgroup',removeFromGroup);
// router.put('/addtogroup',addToGroup);

module.exports=router;
