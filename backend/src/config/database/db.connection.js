import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  username: "postgres",
  database: "notes_app",
  password: "freddy",
  dialect: "postgres",
});

const testDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
  }
};

testDatabase();

export default sequelize;
