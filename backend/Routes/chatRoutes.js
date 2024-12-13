const express=require('express');
const {protect}=require('../Middleware/authMiddleware')


const {accessChat,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup}=require('../Controllers/ChatControllers');


const router=express.Router();

router.post('/accesschat',protect,accessChat);
router.get('/fetchchats',protect,fetchChats);
router.post('/creategroup',protect,createGroupChat);
router.put('/renamegroup',protect,renameGroup);
router.put('/removefromgroup',removeFromGroup);
router.put('/addtogroup',protect,addToGroup);

module.exports=router;
