const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},
{
    timestamps:true
});




//In Mongoose, this refers to the document being processed. In this case, this is the user document that is being saved to the database
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

// The code userSchema.pre('save', async function(next) { ... }) is a middleware in Mongoose that runs before saving a user document to the database. Its main purpose is to hash the user's password for security.
// Here’s how it works:
// Check if the password is modified:
// If the password hasn't changed, it skips the hashing process and moves to the next step.
// Hash the password:
// If the password is new or updated, it generates a "salt" (a random string) using bcrypt.
// Then, it hashes the plain password along with the salt and replaces the plain password with the hashed version.
userSchema.pre('save',async function(next){
    if(!this.isModified){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

const User=mongoose.model('User',userSchema);

module.exports=User;