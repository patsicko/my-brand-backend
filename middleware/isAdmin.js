import User from "../model/userModel";



const isAdmin = async (req, res, next) => {
    try {
        const Adminaccess = await User.findOne({_id:req.user._id,role: "admin" });
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



 const findUserById = async (req, res, next) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        next();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };




export  {isAdmin,findUserById};