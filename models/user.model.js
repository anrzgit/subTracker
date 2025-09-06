import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    unique: true,
    minLength: 10,
  },
  name: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,  // fixed typo: lowercase instead of lowecase
    maxLength: 255,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    // remove unique here
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minLength: 6,
    maxLength: 128,
  },
}, { timestamps: true });

// Add sparse, unique index here for email
userSchema.index({ email: 1 }, { unique: true, sparse: true });

const User = mongoose.model('User', userSchema);

export default User;
