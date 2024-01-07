import express from 'express'
import mongoose from 'mongoose'

import userRouter from "./routes/usersRoutes.js"


mongoose
    .connect('mongodb+srv://Maksim:4CBP3zDuJ7UJCbHI@maksim.ppszojk.mongodb.net/users',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log("Database is ok"))
    .catch((err) => console.log("Database is not ok", err))



const app = express()
app.use(express.json())

app.use('/api', userRouter)

// Starting the server on port 8000
app.listen(8000, (err) => {
  if(err) {
      return console.log(err);
  }
  console.log("Server is running on port 8000");
});