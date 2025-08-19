import { Router } from "express";
import multer from "multer";
import  {analyzeController}  from '../Controllers/analyzeController.js';


const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// expects multipart/form-data with field name: "photo"
router.post("/", upload.single("photo"), analyzeController);

export default router;