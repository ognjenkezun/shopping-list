import { Request, Response } from "express";
import { omit } from 'lodash';
import { createUserService,
         updateUserService,
         loginUserService } from "../services/user";

export const createUser = async (req: Request, res: Response) => {
    
    if (!req.body.email || !req.body.password) {
        throw new Error('Please provide complete details');
    }

    const user = await createUserService(req.body);

    try { 
        if (user) {
            return res.status(201).send(omit(user.toJSON(), "password"));
        }

        throw new Error("User is not created");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const loginUser = async (req: Request, res: Response) => {

    if (!req.body.email || !req.body.password) {
        throw new Error('Please provide complete details');
    }

    const { password, email } = req.body;

    try {
        const token = await loginUserService(email, password);
        if (token) {
            return res.status(200).json({ token });
        }

        throw new Error('Pasword or email is not correct');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        throw new Error('Please provide complete details');
    }

    const { email, password } = req.body;

    try {
        const user = await updateUserService(req.body.user, email, password);
        return res.status(200).send(omit(user.toJSON(), "password"));
    } catch (e) {
        return res.status(500).send(e.message);
    }
}