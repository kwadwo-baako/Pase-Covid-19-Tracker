const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/PaseCovidAPI";
const clusterUri =
  "mongodb+srv://bone:But2ene1@cluster0.rjwr8.mongodb.net/PaseCovid?retryWrites=true&w=majority";

mongoose.connect(clusterUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const schema = mongoose.Schema({
  Country: String,
  Active: Number,
  Deaths: Number,
  Recoveries: Number,
  Confirmed: Number,
  UpdatedOn: String,
});

const Case = mongoose.model("Cases", schema);

module.exports = Case;
