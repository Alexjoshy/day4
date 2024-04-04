const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://alexjoshy760:alexjoshy@cluster0.huznsms.mongodb.net/gptc_mearn?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB connected")

})
.catch(err=>console.log(err))

let mongoSchema=mongoose.Schema

const EmployeeSchema=new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel