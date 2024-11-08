import express from "express";
import client from 'prom-client';
const app = express();
import { monitoringMiddleware } from "./metrics/metrics";

app.use(express.json());
// app.use(requestCountMiddleware);
// app.use(activeUserMiddleware);
// app.use(histogramRequest);
app.use(monitoringMiddleware);

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

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type',client.register.contentType);    
    res.end(metrics);
});


app.listen(3000,() =>{
    console.log("Server is running in port 3000");
});