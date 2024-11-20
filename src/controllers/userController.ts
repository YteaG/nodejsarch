import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
