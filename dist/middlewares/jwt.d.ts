import { Request, Response, NextFunction } from 'express';
export declare class JWT {
    private secret;
    sign: (data: any) => string;
    authenticate: (req: Request, res: Response, next: NextFunction) => void;
}
