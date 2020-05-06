const fs = require("fs");

const saveOrWriteFile = () => {
  try {
    if (fs.existsSync("./Database.txt")) {
      //file exists
    }
  } catch (err) {
    console.error(err);
    fs.writeFileSync("Database.txt", "this is datbase file", (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("created");
    });
  }
};

const readFile = () => {
  try {
    if (fs.existsSync("./Database.txt")) {
      //file exists
      return fs.readFileSync("Database.txt", "utf8");
    }
  } catch (err) {
    console.error(err);
  }
};

exports.saveOrWriteFile = saveOrWriteFile;
exports.readFile = readFile;
