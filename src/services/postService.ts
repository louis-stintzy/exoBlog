import { NewPostData, PostIdData } from "../@types/post";
import * as postRepository from "../repository/postRepository";

export async function getAllPosts() {
  return await postRepository.findAll();
}

export async function getPostById(id: PostIdData) {
  return await postRepository.findById(id);
}

export async function createPost(data: NewPostData) {
  return await postRepository.create(data);
}

export async function updatePost(id: PostIdData, data: NewPostData) {
  const post = await postRepository.findById(id);
  if (!post) {
    throw new Error("Post not found");
  }
  return await postRepository.update(id, data);
}

export async function deletePost(id: PostIdData) {
  const post = await postRepository.findById(id);
  if (!post) {
    throw new Error("Post not found");
  }
  return await postRepository.remove(id);
}
