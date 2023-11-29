import { v2 as cloudinary } from 'cloudinary';
import { fs } from 'fs'
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// delet in the file is use to search unlink
const uploadOnCloud = async (localFilePath) => {
    try {
         if(!localFilePath) return null
        const responsePath =  await cloudinary.uploader.upload(localFilePath , {
            resource_type:"auto"
        });
       console.log(responsePath.url)
       return responsePath;
    } catch (error) {
        fs.unlinkSync(localFilePath)    // remove file
        return null
    }
}

export { uploadOnCloud }