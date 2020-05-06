const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://custom:custom@cluster0-cvdqd.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
