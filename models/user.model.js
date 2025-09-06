import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    phoneNumber : {
        type : String,
        required : [true, 'Phone number is required'],
        trim : true,
        unique : true,
        minLength : 10,
    },
    name : {
        type : String,
        required : [false, 'Name is required'],
        trim : true,
        minLength : 2,
        maxLength : 20,
    },
    email : {
        type : String,
        required : [false, 'email is required'],
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