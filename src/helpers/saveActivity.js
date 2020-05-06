const mongoose = require("mongoose");
const Activity = require("../model/ActivityModel");

const saveActivity = () => {
  const activity = {
    username: "sancho",
    content: "just testing with electron application man",
  };
  const newActivity = new Activity(activity);
  return newActivity
    .save()
    .then(() => console.log("saved"))
    .catch((error) => {
      console.log(error);
    });
};

exports.saveActivity = saveActivity;
