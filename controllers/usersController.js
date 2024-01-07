import UsersSchema from "../models/usersModel.js"

export const createUser = async (req, res) => {
    try {
        const users = new UsersSchema({
            _id: req.body._id,
            id: req.body.id,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
        })

        const user = await users.save();
        res.send({
            message: "User has been successfuly created!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create User!",
        });
    }
}

export const getAllUsers= async (req, res) => {
    try {
        const user = await UsersSchema.find();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Users!",
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UsersSchema.findOne({ id: id, },)
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get User!",
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UsersSchema.deleteOne({ id: id, },)
        if (!id){
            res.status(500).send('User not found')
        }
        res.send({
            message: "User has been successfuly deleted!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Delete Post!",
        });
    }
    
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UsersSchema.updateOne({ 
            id: id, 
        },{
            _id: req.body._id,
            id: req.body.id,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
        })
        res.send({
            message: "User has been successfuly updated!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Update User!",
        });
    }
}