import app from "./app";
import "reflect-metadata";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/datasource";

AppDataSource.initialize()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting DB");
  });
