const express = require("express") // import Express

app = express()

app.use(express.static("umd"))

app.listen(3000, function () {
  // the server is now listening for http requests
  console.log("Ctrl-Click here for AMD: http://localhost:3000/indexAMD.html")
  console.log("Ctrl-Click here for IIFE: http://localhost:3000/indexIIFE.html")
})
