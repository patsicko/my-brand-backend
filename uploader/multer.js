import multer from "multer";
import path from "path";


const upload=multer({
    storage:multer.diskStorage({}),
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
    fileFilter:(req,file,cb)=>{
    const extenton=path.extname(file.originalname);
    if(!extenton==".jpg" && !extenton==".jpeg" && !extenton==".png"){
        cb(new Error("unsupported format",false));
        return;
    }
    cb(null,true)
    }

})

export default upload;