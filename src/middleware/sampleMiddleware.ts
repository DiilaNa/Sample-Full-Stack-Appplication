import { NextFunction, Request, Response } from "express";

export const sampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // send response and stop further processing
    if(req.headers.authorization == null){
        return res.status(401).send("Unauthorized: No authorization header provided"); 
    } 
    next();
}