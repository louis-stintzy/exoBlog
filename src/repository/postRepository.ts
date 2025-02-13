import { NewPostData, PostIdData } from '../@types/post';
import { Post } from '../models';

export async function findAll() {
  return await Post.findAll();
}

export async function findById(id: PostIdData) {
  console.log(id);
  return await Post.findByPk(id);
}

export async function create(data: NewPostData) {
  return await Post.create(data);
}

export async function update(id: PostIdData, data: NewPostData) {
  const [numberOfAffectedRows, [updatedPost]] = await Post.update(data, {
    where: { id },
    returning: true,
  });
  return numberOfAffectedRows > 0 ? updatedPost : null;
}

export async function remove(id: PostIdData) {
  const deletedRows = await Post.destroy({ where: { id } });
  return deletedRows > 0; // return true if deleted
}
