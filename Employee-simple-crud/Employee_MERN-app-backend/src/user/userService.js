let Firstcollection = require('./userModel')

module.exports.getDataFromDBService=()=>{
    return new Promise(function myFn(resolve,reject){
       let result=Firstcollection.find({})
       result.exec()
       .then((result)=>{
        resolve(result)
       })
       .catch((err)=>{
        reject(false)
       })
    })
}


module.exports.createUserDBService= (userDetails)=>{
    return new Promise(function myFn(resolve,reject){
        let userModelData = new Firstcollection();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

      userModelData.save()
      .then(()=>{
        resolve(true)
      })
      .catch((error)=>{
        reject(false)
      })
        
    })
}

module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);

    return new Promise(function myFn(resolve, reject) {
       let patchResult = Firstcollection.findByIdAndUpdate(id, userDetails)
       patchResult.exec()
       .then((patchResult)=>{
        resolve(patchResult)
       })
       .catch((err) => {
        reject(false)
       })
        
    })
}


module.exports.removeOneUserDBService =(id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        let rmvResult = Firstcollection.findByIdAndDelete(id)
        rmvResult.exec()
        .then((rmvResult)=>{
            resolve(rmvResult)
        })
        .catch((err) => {
            reject(false)
        })
    })
   
}