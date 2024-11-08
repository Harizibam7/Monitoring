import express from "express";

const app = express();

function middleware(req:any, res:any, next:any){
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Request took ${endTime - startTime} ms`);

}


app.use(express.json());
app.use(middleware);

app.get('/user', (req, res) => {
    res.send({
        name:"John Doe",
        age:25,
    });
});

app.post("/user",(req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id:1,
    });
});


app.listen(3000,() =>{
    console.log("Server is running in port 3000");
});