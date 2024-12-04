const mongoose=require('mongoose');

const chatModel=new mongoose.Schema({
    chatName:{
        type:String,
        //remove whitespace from the beginning and end of a string field.
        trim:true
    },
    isGroupChat:{
        type:Boolean,
        //default: false: This sets the default value of the isGroupChat field to false. If a document is created without specifying a value for isGroupChat, Mongoose will automatically set it to false
        default:false
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    //timestamps: true is an option that automatically adds two fields to your schema: createdAt and updatedAt.
    timestamps:true
}
)

const Chat=mongoose.model("Chat",chatModel)

module.exports=Chat