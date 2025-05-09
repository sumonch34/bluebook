const express = require("express")
const taxRoute = require("./routes/taxRoute")





const app = express()
require("./db/connection")
app.use(express.json())

app.use("", taxRoute)

app.get("/taxes",  )



app.listen(5000, function() {
  console.log("Server is running on port 5000");
});

//in package.json scripts
// "start": "node --watch app.js" to enable hot reloading use npm start
// "start": "nodemon app.js" to enable hot reloading with nodemon
