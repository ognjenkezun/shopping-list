import { Request, Response } from "express";
import { omit } from 'lodash';
import { createUserService,
         updateUserService,
         loginUserService } from "../services/user";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        return res.status(201).send(omit(user.toJSON(), "password"));
    } catch (e) {
        return res.status(409).send(e.message);
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
    } catch (error) {
        throw new Error('Error 400');
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await updateUserService(req.body.user, email, password);
        return res.status(200).send(omit(user.toJSON(), "password"));
    } catch (e) {
        return res.status(409).send(e.message);
    }
}