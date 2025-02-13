import User from './User.model';
import Post from './Post.model';

User.hasMany(Post, {
  foreignKey: 'user_id',
  as: 'posts',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

export { User, Post };
