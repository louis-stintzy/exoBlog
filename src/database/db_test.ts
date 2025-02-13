import connect from './db_connect';

const sequelize = connect();

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion réussie à la base de données');
  })
  // todo : typer l'erreur
  .catch((err: unknown) => {
    console.error('Impossible de se connecter à la base de données :', err);
  });
