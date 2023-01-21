const Competetions = require("../models/competetions");

const getCompetetions = async (req, res) =>{
    try{
        const data= await Competetions.find({});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

const createCompetetion = async (req, res)=>{
    try{
        const data =  await Competetions.create(req.body);
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
    
}

const deleteCompetetion = async (req, res) =>{
    const { id }= req.body;
    try{
        const data = await Competetions.findOneAndDelete({_id: id});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

const updateCompetetions = async (req, res) =>{
    const { id }= req.body;
    try{
        const data = await Competetions.findOneAndUpdate({_id: id}, {...req.body});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

module.exports = {getCompetetions ,createCompetetion, deleteCompetetion, updateCompetetions};