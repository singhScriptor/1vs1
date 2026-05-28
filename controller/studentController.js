const db = require('../models/studentTable')

const postStudent = async (req,res)=>{
    try{
        const {name,email} = req.body
        const newStudent = await db.create({name,email})
        res.json(newStudent)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const getStudentById = async(req,res)=>{
    try{
        const{id}= req.params
        const find = await db.findByPk(id)
        if(find){
            res.json(find)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

module.exports ={
    postStudent,
    getStudentById
}