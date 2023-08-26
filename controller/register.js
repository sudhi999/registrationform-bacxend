const {User} = require('../databaseTables/syncWithDb')

exports.createUser =  async(req,res) => {
    const {Name,Number,City,State} = req.body
    try{
        const create = await User.create({
            fullName:Name,
            mobileNumber:Number,
            state : State,
            city : City
        })
        res.status(200)
        res.send({
            message : 'Registered Successfully',
            data : create,
            status : true
        })
    }catch(e){
        console.log(e)
        res.status(500)
        res.send({
            status : false,
            message : 'something went wrong',
        })
    }
}

exports.view = async(req,res) => {
    try{
        const alldata = await User.findAll()
        res.status(200)
        res.send({
            message : 'Fetched Data Successfully',
            data : alldata
        })
    }catch(e){
        res.status(500)
        res.send({"error" : e})
    }
}

exports.edit =  async(req,res) => {
    const {id,fullName,mobileNumber,state,city} = req.body
    try{
        const create = await User.update({
            fullName:fullName,
            mobileNumber:mobileNumber,
            state : state,
            city : city
        },{where:{
            id : id
        }})
        res.status(200)
        res.send({
            message : 'updated Successfully',
            data : create
        })
    }catch(e){
        console.log(e)
    }
}

exports.delete = async(req,res) => {
    try{
        const {id} = req.body
        const alldata = await User.destroy({where:{
            id : id
        }})
        res.status(200)
        res.send({
            message : 'deleted Successfully',
            data : alldata
        })
    }catch(e){
        res.status(500)
        res.send({"error" : e})
    }
}