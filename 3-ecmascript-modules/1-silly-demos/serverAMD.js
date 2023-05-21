const express = require("express") // import Express

app = express()

app.use(express.static("amd"))

app.listen(3000, function () {
  // the server is now listening for http requests
  console.log("Ctrl-Click here to test: http://localhost:3000")
})
