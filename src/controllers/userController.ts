import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.send("get all users");
};

export const getUserById = (req: Request, res: Response) => {
  res.send("get user by id");
};

export const createUser = (req: Request, res: Response) => {
  res.send("create user");
};

export const updateUser = (req: Request, res: Response) => {
  res.send("update user");
};

export const deleteUser = (req: Request, res: Response) => {
  res.send("delete user");
};
