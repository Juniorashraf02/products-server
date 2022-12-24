const mongoose = require("mongoose");

function dbconnect() {
  mongoose
    .connect(
      `mongodb+srv://admin:IGh5BH8DoVhKWLpo
@cluster0.6dmhann.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Database connection established");
    });
}

module.exports=dbconnect;
