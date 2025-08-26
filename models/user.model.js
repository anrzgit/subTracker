import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'User name is required'],
        trim : true,
        minLength : 2,
        maxLength : 20,
    },
    email : {
        type : String,
        required : [true, 'email is required'],
        trim : true,
        unique : true,
        lowecase : true,
        maxLength : 255,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
        trim : true,
        minLength : 6,
        maxLength : 128,
    },
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

export default User;