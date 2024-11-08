"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeUser = void 0;
// import { NextFunction, Response, Request } from "express";
const prom_client_1 = __importDefault(require("prom-client"));
exports.activeUser = new prom_client_1.default.Gauge({
    name: "active_requests",
    help: "Number of active requests",
    labelNames: ['method', 'route']
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
