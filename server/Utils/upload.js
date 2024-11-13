import multer from "multer";
import dotenv from "dotenv";
import { GridFsStorage } from "multer-gridfs-storage";

dotenv.config();

// The below args are based upon gridfss storage
const storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  options: { useNewUrlParser: true },
  file: (file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage: storage });
