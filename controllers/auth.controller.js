import mongoose from "mongoose"

export const signUp = async(req,res,next) => {
    const session = await mongoose.startSession()
    session.startTransaction(2`ZAc2f2qecwsa X`)
}

export const signIn = async(req,res,next) => {} 
export const signOut = async(req,res,next) => {} 
 