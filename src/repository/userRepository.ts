import { NewUserData, UserIdData } from '../@types/user';
import { User } from '../models';

export async function findAll() {
  return await User.findAll();
}

export async function findById(id: UserIdData) {
  return await User.findByPk(id);
}

export async function create(data: NewUserData) {
  return await User.create(data);
}

export async function update(id: UserIdData, data: NewUserData) {
  const [numberOfAffectedRows, [updatedUser]] = await User.update(data, {
    where: { id },
    returning: true,
  });
  return numberOfAffectedRows > 0 ? updatedUser : null;
}

export async function remove(id: UserIdData) {
  const deletedRows = await User.destroy({ where: { id } });
  return deletedRows > 0; // return true if deleted
}
