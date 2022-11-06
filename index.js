const express = require ("express");

const authRoute= require ("./routes/auth");

const userRoute= require ("./routes/blog_users");

const postRoute= require ("./routes/blog_posts");

const stateRoute= require ("./routes/blog_state")

const multer = require ("multer")

const {connectToMongoDb} = require ("./db")

require ("dotenv").config();

// const jwt =  require ("jsonwebtoken")

require("../API/routes/jwtAuth") //jwt Authentication

const PORT = process.env.PORT;

const app = express();

// connecting to MongoDb instance

connectToMongoDb ()

app.use(express.json());

app.get ("/", (req, res) => {
    res.send ("Welcome to Charles' API!")
})

// uploading images 

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=> {
        cb(null, req.body.name)
    },
});

const upload = multer ({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
});

// routes

app.use ("/api/auth", authRoute);

app.use ("/api/users", userRoute);

app.use ("/api/posts", postRoute);

app.use ("/api/states", stateRoute);

app.listen (PORT, ()=> {
    console.log (`Server started on http://localhost:${PORT}`)
})