// import { NextFunction, Response, Request } from "express";
import client from 'prom-client';

export const activeUser = new client.Gauge({
    name:"active_requests",
    help:"Number of active requests",
    labelNames: ['method','route']
});


// export function activeUserMiddleware(req:Request, res:Response, next:NextFunction) {
//     const startTime = Date.now();
//     activeUser.inc({
//         method:req.method,
//         route:req.route?req.route.path:req.path
//     });
//     res.on('finish',() => {
//         const endTime = Date.now();
//         console.log(`Request took ${endTime - startTime}`);
//         setTimeout(() => {
//             activeUser.dec({
//                 method:req.method,
//                 route:req.route?req.route.path:req.path
//             });
//         },1000)

//     });
//     next();
// }