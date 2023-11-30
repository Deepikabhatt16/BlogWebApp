import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath}from "url";
import {dirname} from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));
const port=4000;
const app=express();
let hk=[];
let box=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.render(__dirname+"/views/index.ejs");
});


app.post("/submit",(req,res)=>{
  let head=req.body["head"];
  let content=req.body["content"];
  hk.push(head);
  box.push(content);
  res.render(__dirname+"/views/index.ejs",{header:hk,content:box});
  
});

app.get("/ideas", (req, res) => {
   res.render(__dirname+"/views/ideas.ejs",{header:hk,content:box});
});
app.listen(port,()=>{
    console.log("serving on port = "+port);
    console.log("kyu ni chlra bhyii");
});