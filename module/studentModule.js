import mongoose from "mongoose";
import express from "express";

const studentSchema = mongoose.Schema({
    regNo : Number,
    studentName: String,
    grade: String,
    section :{
        type: String,
        default: "a"
    }
    
})

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;