import { NextFunction,Request, Response } from "express";
import { requestCounter } from "./requestCount";
import { httpRequestMicroseconds } from "./histogramRequest";
import { activeUser } from "./activeCount";


export function monitoringMiddleware(req:Request, res:Response,next:NextFunction){
    const startTime = Date.now();
    activeUser.inc();
    res.on('finish', () => {
        const endTime = Date.now();
        
        //Counter
        requestCounter.inc({
            method:req.method,
            route:req.route? req.route.path:req.path,
            status_code:req.statusCode
        });

        //Gauage
        activeUser.dec();
           
        //Histogram
        httpRequestMicroseconds.observe({
            method:req.method,
            route:req.route?req.route.path:req.path,
            code:req.statusCode
        },endTime-startTime);
        
    });
    next();
}