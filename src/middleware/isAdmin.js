import User from "../model/userModel";
import  jwt  from "jsonwebtoken";



const isAdmin = async (req, res, next) => {
    try {

      const token =req.headers.token.split(' ')[1];

      const decodedToken=jwt.verify(token,process.env.JWT_SECRET);

   

        const Adminaccess = await User.findOne({_id:decodedToken.id,role: "admin" });
        console.log(Adminaccess);

        
        if(!Adminaccess) {
            return res
                .status(401)
                .json({ status: "not allowed", message: "only admins allowed" });
               
        }
        next();
    } catch (error) {
        res.status(500).json(error);
    }
};



//  const findUserById = async (req, res, next) => {
//       try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//           return res.status(404).json({ message: "User not found" });
//         }
//         req.user = user;
//         next();
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     };




export default isAdmin;