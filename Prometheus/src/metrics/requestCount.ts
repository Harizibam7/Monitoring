// import { NextFunction, Response, Request } from "express";
import client from "prom-client";

export const requestCounter = new client.Counter({
    name:'http_requests_code',
    help:'Total number of HTTP requests',
    labelNames:['method','route','status_code']
});


// export const requestCountMiddleware = (req:Request, res:Response, next:NextFunction) => {
//     const startTime = Date.now();

//     res.on('finish',() => {
//         const endTime = Date.now();

//         console.log(`Request took ${endTime - startTime} `);
//         requestCounter.inc({
//             method:req.method,
//             route:req.route?req.route.path : req.path,
//             status_code:req.statusCode
//         });
//     });
//     next();
// }


