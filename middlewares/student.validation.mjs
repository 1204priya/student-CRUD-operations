import student from '../model/student.model.mjs'

export const studentValidations=async(req,res,next)=>{
    try{
    if(!req.body.id){
       return res.status(404).send({message:"please insert id"})
    };
    const validId = await student.findOne({id:req.body.id})
    if(validId!==null){
        return res.status(404).send({message:"id is already taken..please use another id"})
    };

    if(!req.body.name){
       return  res.status(404).send({message:"name cant be empty..please fill your name"});
    };


    if(!req.body.number){
        return res.status(404).send({message:"number cant be empty..please provide your number"});
    };


    if(!req.body.email){
        return res.status(404).send({message:"email cant be empty..please provide your email"});
    };
    
    const studentE = await student.findOne({email:req.body.email})
    if(studentE!==null){
      return  res.status(404).send({message:"email is already taken..please provide another one"});
    }
    next()
}catch{
    res.status(500).send({message:"error in validations"});
    console.log("error in validations");
}
}
