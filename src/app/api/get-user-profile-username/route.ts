import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import {z} from 'zod'
import { usernameValidation } from "@/schemas/signUpSchema";
const UserNameQuerySchema=z.object({
    username:usernameValidation
})

export async function GET(req:Request){
    await dbConnect()
    try {
        const {searchParams} =new URL(req.url)
        const queryParam={
            username:searchParams.get('username')
        }
        // validate with zod
        const result=UserNameQuerySchema.safeParse(queryParam)
        // console.log(result)
        if(!result.success){
            const usernameErrors=result.error.format().username?._errors ||[]
            return Response.json({
                message:usernameErrors?.length>0?usernameErrors.join(', '):'Invalid Query Parameters',
                success:false
            },{status:400})
        }
        const {username}=result.data
        // console.log(username)
        const user=await UserModel.findOne({username})
        
        if(!user){
            return Response.json({
                success:false,
                message:'User Not found'
            },{status:201})
        }
        const userDetails = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            followers: user.followers,
            following: user.following,
            image: user.image,
            imgPublicId: user.imgPublicId,
            message: user.message,
            __v: user.__v
          };
        // console.log(userDetails)
        return Response.json({
            success:true,
            userDetails,
            message:'Username is avlable'
        },{status:201})
    } catch (error:any) {
        console.error("Error during chacking username ",error)
        return Response.json({
            success:false,
            message:"Error during checking user name"
        },{status:500})
    }
}