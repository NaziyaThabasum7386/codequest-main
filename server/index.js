import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userroutes from "./routes/user.js"
import questionroutes from "./routes/question.js"
import answerroutes from "./routes/answer.js"
const app = express();
dotenv.config();
//console.log("Database URL:", process.env.MONGODB_URL);
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use("/user", userroutes);
app.use('/questions', questionroutes)
app.use('/answer',answerroutes)
app.get('/', (req, res) => {
    res.send("Codequest is running perfect")
})

const PORT = process.env.PORT || 5000
//mongodb+srv://admin:test@cluster0.wh4n0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//const database_url = process.env.MONGODB_URL
const database_url = "mongodb+srv://admin:test@cluster0.wh4n0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(database_url)
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))