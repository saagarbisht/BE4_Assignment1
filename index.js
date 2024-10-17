import "dotenv/config"
import express from "express"

import dbConnect from "./db/connection.js"
import {route} from "./routes/books.routes.js"

dbConnect(process.env.MONGO_DB_URL)

const app = express()

app.use(express.json())
app.use("/books",route)

app.listen(process.env.PORT,() => {
  console.log("server is live...")
})