
import student from '../model/student.model.mjs';



//creating student data
  export const createStudent =async (req,res)=>{

    try{
    const studentObj={
        id:req.body.id,
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        class:req.body.class,
        marks:req.body.marks
    }

    const studentCreated = await student.create(studentObj);
    const response = {
        id:studentCreated.id,
        name:studentCreated.name,
        number:studentCreated.number,
        email:studentCreated.email,
        class:studentCreated.class, 
        marks:studentCreated.marks,
        createdAt:studentCreated.createdAt,
        updatedAt:studentCreated.updatedAt
    }
    res.status(201).send(response)
}catch{
    res.status(500).send({
        message:"error while creating studentdata"
    });
};
};

//fetch all student data
//fetch student data by its id or name or marks

export const getStudentData =async (req,res)=>{
    try{
        const findStudentByQuery={};

        const studentId = req.query.id;
        const MarksQ = req.query.marks;
        const nameQ = req.query.name;

        if(studentId){
            findStudentByQuery.id=studentId;
        }

if(nameQ){
    findStudentByQuery.name=nameQ;
};
if(MarksQ){
    findStudentByQuery.marks=MarksQ;
}
const allStudents = await student.find(findStudentByQuery);
res.status(200).send(allStudents);

    }catch{
        res.status(500).send({
            message:"error while collecting student data"
        })
    }
}; 


//updating student data using id
export const updateStudents=async(req,res)=>{
    try{
        const Student = await student.findOne({id:req.body.id});

        Student.name = req.body.name != undefined ? req.body.name : Student.name;
        Student.email = req.body.email != undefined ? req.body.email : Student.email;
        Student.number = req.body.number != undefined ? req.body.number : Student.number;
        Student.marks = req.body.marks != undefined ? req.body.marks : Student.number;
        Student.class=req.body.class != undefined ? req.body.class : Student.class

        const response = await Student.save();

        return res.status(201).send({
            id:response.id,
            name:response.name,
            email:response.email,
            number:response.number,
            marks:response.marks,
            class:response.class
        });
    }catch{
        res.status(500).send({message:"error while updating student data"})
        console.log("error while updating student data");
    };
}

export const deleteData=async(req,res)=>{
    try{
        const deleteStudent =await student.findOne({id:req.params.id});

        if(deleteStudent == null){
            return res.status(400).send({
                message:"id does not exist"
            })
        };

        await student.deleteOne({
            id:req.params.id
        });
        res.status(200).send({
            message:"student data successfully deleted"
        })

    }catch{
        res.status(500).send(
            {message:"error while deleting student data"}
            );
    };
}

