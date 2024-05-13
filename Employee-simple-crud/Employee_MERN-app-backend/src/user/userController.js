const userService = require('./userService');

const getDataControllerfn = async (req, res) => {
    try {
        let employee = await userService.getDataFromDBService();
        res.send({ "status": true, "data": employee });
    } catch (error) {
        res.status(500).json({ message: error })
    }

}


const createUserControllerFn = async (req, res) => {
    
    try {
        let status = await userService.createUserDBService(req.body)
        if (status) {
            res.send({ "Status": true, "message": "User created successfully" });
        }
        else {
            res.send({ "Status": false, "message": "User creation failed" });
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


const updateUserController = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    try {
        let result = await userService.updateUserDBService(req.params.id, req.body)

        if (result) {
            res.send({ "Status": true, "message": "User updated successfully" });

        } else {
            res.send({ "Status": false, "message": "User not updated successfully" });
        }
    } catch (error) {
        res.status(500).json({ "err": "server failed" })
    }
}

const deleteUserController = async (req, res) => {
    console.log(req.params.id)

    
    try {
        let result = await userService.removeOneUserDBService(req.params.id);

        if (result) {
            res.send({ "status": true, "message": "User deleted successfully" })
        } else {
            res.send({ "status": false, "message": "User not deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }

}


module.exports = {
    getDataControllerfn,
    createUserControllerFn,
    updateUserController,
    deleteUserController
}


