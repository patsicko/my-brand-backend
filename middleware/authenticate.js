import jwt from 'jsonwebtoken';

 const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.token;
        if(!authHeader) {
            return res.status(401).json({message:"unauthorized"});
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({msg:"unauthorized"});
    }
}

export default verifyToken;