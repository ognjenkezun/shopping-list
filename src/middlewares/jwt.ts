import jwtToken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export class JWT {

    private secret = process.env.SECRET || "ps120fadrn58d9aw";
    
    public sign = (data: any) => {
        try {
            return jwtToken.sign(data, this.secret);
        } catch (error) {
            throw new Error("Error in sign");
        }
    }
    
    public authenticate = (req: Request, res: Response, next: NextFunction) => {
        try {
            const token: string = req.headers.jwt?.toString() ?? '';

            if (!token) {
                res.status(401).json({ statusCode: 401, message: "Unauthorized" });
            }
        
            const isValid = jwtToken.verify(token, this.secret);
    
            if(isValid) {
                const user = jwtToken.decode(token);
                req.body.user = user;
                next();
            }
            else {
                res.status(401).json({ statusCode: 400, message: "Token is invalid" });
            }
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
}