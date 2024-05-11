
import User from "../Model/user.model.js"
import bcryptjs from "bcryptjs"
export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already Exists"})
        }

        const hashPassword=await bcryptjs.hash(password,10);
        const CreatedUser=new User({
            fullname:fullname,email:email,password:hashPassword
        });
        await CreatedUser.save();
        res.status(201).json({message:"User Created Successfully", user:{
            _id:CreatedUser._id,
            fullname:CreatedUser.fullname,
            email:CreatedUser.email,
        }});
        
    } catch (error) {
        console.log("Err ",error.message);
        res.status(500).json({message:"Internal Server Error"});

    }
};

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatching=await bcryptjs.compare(password,user.password);
        if(!user||!isMatching){
            return res.status(400).json({message:"Invalid Username or Password"});
            
        }
        else{
            res.status(200).json({message:"Login Successfully",
            user:{                
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }});

        }
    } catch (error) {
        console.log("Error "+error.message);
    }
}

