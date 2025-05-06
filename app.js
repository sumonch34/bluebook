const express = require("express");
const { taxes } = require("./db/connection.js");





const app = express()
// require("./db/connection.js");

// app.get("/taxes", async function(req, res) {
//   const allTaxes = await taxes.findAll()
//   res.json({
//     message: "John Doe",
//     taxes: allTaxes,
//   });
// });


app.listen(5000, function() {
  console.log("Server is running on port 5000");
});

//in package.json scripts
// "start": "node --watch app.js" to enable hot reloading use npm start
// "start": "nodemon app.js" to enable hot reloading with nodemon
