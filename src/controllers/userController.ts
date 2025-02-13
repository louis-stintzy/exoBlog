import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { NewUserData } from '../@types/user';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body as NewUserData; // todo: valider req.body et typer
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const userData = req.body as NewUserData; // todo: valider req.body et typer
    const updatedUser = await userService.updateUser(id, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
