const express=require('express');
const {protect}=require('../Middleware/authMiddleware')


const {accessChat}=require('../Controllers/ChatControllers');


const router=express.Router();

router.post('/accesschat',protect,accessChat);
// router.get('/fetchchats',fetchChats);
// router.post('/creategroup',createGroupChat);
// router.put('/renamegroup',renameGroup);
// router.put('/removefromgroup',removeFromGroup);
// router.put('/addtogroup',addToGroup);

module.exports=router;
