const fs=require('fs')
const path='./MOCK_DATA.json'
const FILEPATH = "./MOCK_DATA.json"

const data = fs.readFileSync(path,'utf-8')
exports.getAllEmployee=(req, res) => {
    
    res.json(JSON.parse(data))
}

exports.addEmployee=(req, res) => {
    const { id, first_name, email } = req.body
    const newEmployee = { id, first_name, email }
    const data1 = fs.readFileSync(FILEPATH,'utf-8')
    const emp=JSON.parse(data1)
    emp.push(newEmployee)
    fs.writeFileSync(FILEPATH,JSON.stringify(emp))

    res.status(201).json({
        message: "Employee added successfully",
        data: { 
            "id":req.body.id,
            "first_name":req.body.first_name,
            "email":req.body.email 
            }
    })
}