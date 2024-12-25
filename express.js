let express = require("express");
let path = require("path")

let app = express();
app.use(express.urlencoded({ extended: true }));
app.set("/views",path.join(__dirname,"/views"))
app.set("view engine","ejs")

app.listen(3000,()=>{
    console.log("Running on port number 3000")
})

const dummyData = [
    { username: "user1", comments: "This is a great post!" },
    { username: "user2", comments: "I found this very helpful, thank you." },
    { username: "user3", comments: "Can you provide more details on this topic?" },
    { username: "user4", comments: "Interesting perspective, I never thought about it that way." },
    { username: "user5", comments: "I disagree with some points, but it's a good read overall." }
];

// get-retriving the data /comments
app.get("/comments",(req,res)=>{
    res.render("index.ejs", comment1=dummyData)
})

// post-for updating the data/comments first take comments through get request then update the comments through post request 
app.get("/newcomments",(req,res)=>{
    res.render("addnewcomments.ejs")
})
app.post("/newcomments",(req,res)=>{
    console.log(req.body)
    console.log(dummyData.push(req.body))
    console.log(dummyData)
    res.redirect("comments")
})

// show-to show the id value specific jus

// app.get("/input",(req,res)=>{
//     console.log(req.body);
//     res.sendFile(__dirname+"/input.html")
// })

// app.post("/input",(req,res)=>{
//     console.log(req.body);
//     res.sendFile(__dirname+"/inputpost.html")
// })

