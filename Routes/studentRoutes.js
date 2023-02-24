import express, { Router } from "express";

import { creatStudient, getStudient ,deleteStudent } from "../controller/student.js";

const router = express.Router();

router.get("/" , getStudient)
router.post("/" , creatStudient)
router.delete("/:id" , deleteStudent)


export default router;