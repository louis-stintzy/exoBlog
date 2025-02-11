import { Request, Response } from "express";

export const getAllPosts = (req: Request, res: Response) => {
  res.send("get all posts");
};

export const getPostById = (req: Request, res: Response) => {
  res.send("get post by id");
};

export const createPost = (req: Request, res: Response) => {
  res.send("create post");
};

export const updatePost = (req: Request, res: Response) => {
  res.send("update post");
};

export const deletePost = (req: Request, res: Response) => {
  res.send("delete post");
};
