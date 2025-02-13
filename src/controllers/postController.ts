import { Request, Response } from 'express';
import * as postService from '../services/postService';
import { NewPostData } from '../@types/post';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const post = await postService.getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const postData = req.body as NewPostData; // todo: valider req.body et typer
    const newPost = await postService.createPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const postData = req.body as NewPostData; // todo: valider req.body et typer
    const updatedPost = await postService.updatePost(id, postData);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid id');
    }
    const deletedPost = await postService.deletePost(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
