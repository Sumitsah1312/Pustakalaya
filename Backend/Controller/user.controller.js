import User from "../Model/user.model.js"
export const signup=async(req,res)=>{
    try {
        const [fullname,email,password]=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already Exists"})
        }
        const CreatedUser=new User({
            fullname,email,password
        })
        CreatedUser.save();
        res.status(201).json({message:"User Created Successfully"});
    } catch (error) {
        console.log("Err ",error.message);
        res.status(500).json({message:"Internal Server Error"});

    }
}

