import mongoose from "mongoose";
import express from "express";
import studentModel from "../module/studentModule.js";

export const getStudient= async  (req , res)=>{
    try {
        const studient = await studentModel.find()
        res.status(200).json(studient)
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}

export const creatStudient = async (req, res)=>{
    const student = req.body;

    const newStudent =  new studentModel(student);
    try {
       const newu = await newStudent.save();
        res.status(200).json(newu)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
export const deleteStudent = async (req, res)=>{
    try {
        const id = req.params.id;
        (await studentModel.findByIdAndRemove(id)).exet()
        res.status(200).json("delete successful")
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}