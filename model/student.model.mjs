import mongoose  from "mongoose";

const studentSchema = mongoose.Schema({
    id:{
        type : Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    class:{
        type:String,
        required:true,
    },
    marks:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now();
        }
    },
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    }
});

export default mongoose.model('students',studentSchema)



