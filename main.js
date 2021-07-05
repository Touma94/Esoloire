if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './src')))
app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "src"}
    );
});
app.listen(process.env.PORT || 8080);
