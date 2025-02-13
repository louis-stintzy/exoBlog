import { User } from '../models';
import connect from './db_connect';

const sequelize = connect();

async function seed() {
  try {
    await sequelize.sync({ force: false }); // false to not drop tables
    await User.create({
      username: 'Alice',
      email: 'alice@example.com',
      password: '12345',
      avatar: 'https://picsum.photos/200',
    });
    await User.create({
      username: 'Bob',
      email: 'bob@example.com',
      password: '12345',
      avatar: 'https://picsum.photos/200',
    });
    await User.create({
      username: 'Luc',
      email: 'luc@example.com',
      password: '12345',
      avatar: 'https://picsum.photos/200',
    });
    console.log('Seed data created');
  } catch (error) {
    console.error('Error while seeding');
    console.error(error);
  }
}

void seed();
