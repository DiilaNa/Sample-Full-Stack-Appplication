import { log } from "console";
import express from "express";
import cors from "cors"

const app = express();

// take data as Json / built in middleware
app.use(express.json())  

// CORS 
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST","GET","PUT","DELETE"]
}))



app.use((req,res,next)=>{
    //res.send("hello I am Global middleware")
    next();  
    // go forward,like dofilter(req,res) in spring boot project
})

const sampleMiddleWare = (req,res,next) => {
    next()
}
// 
app.get("/hello",sampleMiddleWare, (req, res) =>{
    log("Hello this is /hello endpoint")
  res.send("Hello from /hello endpoint");
});

app.get("/test",sampleMiddleWare, (req, res) => {
  log("Hello this is /test endpoint")
  res.send("Hello from /test endpoint");
});

app.get("/", (req, res) => {
  res.send("Running EndPoint!");
  log("Hello this is node express backnend")
});



app.listen(5000, () => {
  log("Server is running on port 5000");
});