"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCounter = void 0;
// import { NextFunction, Response, Request } from "express";
const prom_client_1 = __importDefault(require("prom-client"));
exports.requestCounter = new prom_client_1.default.Counter({
    name: 'http_requests_code',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
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
