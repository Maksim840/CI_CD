import { Router } from "express"
const router = new Router

import { createUser, getAllUsers, getUser, deleteUser, updateUser } from '../controllers/usersController.js'

router.post("/users", createUser) 
router.get("/users/:id", getUser) 
router.get("/users", getAllUsers) 
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser) 

export default router
