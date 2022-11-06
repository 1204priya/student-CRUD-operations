
import {createStudent,} from "../controller/student.controller.mjs";
import {getStudentData} from "../controller/student.controller.mjs";
import { studentValidations } from "../middlewares/student.validation.mjs";
import { updateStudents } from "../controller/student.controller.mjs";
import { deleteData } from "../controller/student.controller.mjs";
//import { findStudentById } from "../controller/student.controller.mjs";
 
export default (app)=>{ 

app.post("/student/data/api/addStudent",studentValidations,createStudent);
app.get("/student/data/api/addStudent",getStudentData);
app.put("/student/data/api/addStudent/:id",updateStudents);
app.delete("/student/data/api/addStudent/:id",deleteData)
}