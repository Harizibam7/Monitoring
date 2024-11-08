"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequestMicroseconds = void 0;
//import { NextFunction,Request,Response } from "express";
const prom_client_1 = __importDefault(require("prom-client"));
exports.httpRequestMicroseconds = new prom_client_1.default.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000]
});
// export function histogramRequest(req:Request, res:Response, next:NextFunction){
//     const startTime = Date.now();
//     res.on('finish',() => {
//         const endTime = Date.now();
//         httpRequestMicroseconds.observe({
//             method:req.method,
//             route:req.route?req.route.path : req.path,
//             code:req.statusCode
//         },endTime - startTime);
//         //httpRequestMicroseconds.observe(endTime - startTime);
//     });
//     next();
// }
