import { Router } from "express";

import { signIn, signOut, signUp, signInUsingPhoneNumber,signUpUsingPhoneNumber, signOutPhoneNumber, } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-up', signUp);

authRouter.post('/sign-in',signIn);

authRouter.post('/sign-out',signOut);


// Using Phone Number
authRouter.post('/sign-up/phone-number', signUpUsingPhoneNumber);

authRouter.post('/sign-in/phone-number',signInUsingPhoneNumber);

authRouter.post('/sign-out/phone-number',signOutPhoneNumber);


export default authRouter