import jwt from "jsonwebtoken";
import {secret} from "../config/auth.config.js";

export function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (token){
        try {
            req.user = jwt.verify(token, secret);
        } catch (error) {
            req.user = undefined;
            res.status(403);
            res.send();
        }
    }
    next();
}
