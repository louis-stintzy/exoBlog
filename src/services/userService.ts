import { NewUserData, UserIdData } from '../@types/user';
import * as userRepository from '../repository/userRepository';

export async function getAllUsers() {
  return await userRepository.findAll();
}

export async function getUserById(id: UserIdData) {
  return await userRepository.findById(id);
}

export async function createUser(data: NewUserData) {
  return await userRepository.create(data);
}

export async function updateUser(id: UserIdData, data: NewUserData) {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return await userRepository.update(id, data);
}

export async function deleteUser(id: UserIdData) {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return await userRepository.remove(id);
}
