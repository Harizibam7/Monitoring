"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringMiddleware = monitoringMiddleware;
const requestCount_1 = require("./requestCount");
const histogramRequest_1 = require("./histogramRequest");
const activeCount_1 = require("./activeCount");
function monitoringMiddleware(req, res, next) {
    const startTime = Date.now();
    activeCount_1.activeUser.inc();
    res.on('finish', () => {
        const endTime = Date.now();
        //Counter
        requestCount_1.requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: req.statusCode
        });
        //Gauage
        activeCount_1.activeUser.dec();
        //Histogram
        histogramRequest_1.httpRequestMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: req.statusCode
        }, endTime - startTime);
    });
    next();
}
