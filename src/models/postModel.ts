const { DataTypes } = require("sequelize");
import connect from "../database/db";

const sequelize = connect();

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "User",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "post",
    timestamps: true,
  }
);

export default Post;
