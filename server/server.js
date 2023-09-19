const express = require('express')
const app = express()

// route for api
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]}) // backend api
})

// port 5000 server, port 3000 client
app.listen(5000, () => { console.log("Server started on port 5000")})

// npm run dev, in package.json where added the start for nodemon
// localhost:5000/api in browser, see the json data