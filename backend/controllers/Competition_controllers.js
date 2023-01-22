const Competetions = require("../models/competetions");

// get all the competetions that have been created
const getCompetetions = async (req, res) =>{
    try{
        const data= await Competetions.find({});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

// create a new competetion
const createCompetetion = async (req, res)=>{
    try{
        const data =  await Competetions.create(req.body);
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
    
}

//delete an existing competetion
const deleteCompetetion = async (req, res) =>{
    const { id }= req.params;
    try{
        const data = await Competetions.findOneAndDelete({_id: id});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

// updating a competetion that has been already created
const updateCompetetions = async (req, res) =>{
    const { id }= req.body;
    try{
        const data = await Competetions.findOneAndUpdate({_id: id}, {...req.body});
        res.status(200).json(data);
    }catch(err){
        throw err;
    }
}

// create a new request for the competetion
const addRequest = async (req, res) =>{
    const { id }= req.params;
    try{
        await Competetions.find({_id: id}).then((docs, err)=>{
            if(docs[0].members.length< docs[0].membersNeeded){
                if(docs[0].requests.includes(req.body.requests)){
                    res.status(201).json("AlreadyThere");
                }
                else{
                    docs[0].requests.push(req.body.requests);
                    docs[0].save();
                    res.status(200).json("Done");
                }
            }
            else{
                res.status(201).json("Filled");
            }
        }) 
    }catch(err){
        throw(err);
    }
}

// delete the request for a certain applicant
const deleteRequest = async (req, res) =>{
    const { id }= req.params;
    try{
        const deleteRequest = await Competetions.find({_id: id}).then((docs, err)=>{
            const index = docs[0].requests.indexOf(req.body.members);
            docs[0].requests.splice(index, 1);
            docs[0].save();
        });
        res.status(200).json(deleteRequest);
    }catch(err){
        throw err;
    }
}

// confirm the request and add the applicant as a member of the team
const addMember = async (req, res)=>{
    const { id } = req.params;
    try{
        const removeCurrentRequest = await Competetions.find({_id: id}).then((docs, err)=>{
            const index = docs[0].requests.indexOf(req.body.members);
            docs[0].requests.splice(index, 1);
            docs[0].members.push(req.body.members);
            docs[0].save();
        });
        res.status(200).json(removeCurrentRequest);
    }catch(err){
        throw err;
    }
}

module.exports = {getCompetetions ,createCompetetion, deleteCompetetion, updateCompetetions, addRequest, addMember, deleteRequest};