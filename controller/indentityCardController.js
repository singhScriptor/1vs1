const db = require('../models/identityCard')

const postIdCard = async(req,res)=>{
    try{
        const {idCard,studentId} = req.body
        const postId = await db.create({idCard,studentId})
        res.json(postId)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
const getIdCardByStudnetId = async(req,res)=>{
    try{
        const {id} = req.params
        const findCard = await db.findOne({where:{studentId: id}})
        if(findCard){
            res.status(200).json(findCard)
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}


module.exports = {
    postIdCard,
    getIdCardByStudnetId
}