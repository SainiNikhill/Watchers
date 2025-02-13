import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";


  // Configuration
  cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME ,                                                                                                                                                       
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const UploadOnCloudinary = async (localFilePath)=> {
    try{
        if(!localFilePath) return null
        const response =  await cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto",
        });
        // file has been uploaded succesfully 
       console.log("file uploaded  on  cloudinary", response.url);
       return response;

    }catch ( error ){
        fs.unlinkSync(localFilePath) // remove the locally saved temp files as the upload operation got failed 
        return null;
    }
  }

  export { UploadOnCloudinary}