const mongoose = require("mongoose");
const chalk = require("chalk");

async function connect() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/business_card_app")
    .then(() =>
      console.log(chalk.magentaBright("connected to MongoDb Locally!"))
    )
    .catch((error) =>
      console.log(
        chalk.redBright.bold(`could not connect to mongoDb: ${error}`)
      )
    );
}

module.exports = connect;
