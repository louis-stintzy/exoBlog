import connect from "./db";

import { User, Post } from "../models";

const sequelize = connect();

async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await User.sync({ force: true });
    console.log("User model synchronized.");

    await Post.sync({ force: true });
    console.log("Post model synchronized.");

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
}

syncModels();
