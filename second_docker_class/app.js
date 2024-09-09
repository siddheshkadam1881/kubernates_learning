const express = require('express');

const app = express();
const PORT = 3000;

app.get('/test', function (req, res) {
    console.log("/Welcome to docker study");
    res.send('Welcome to docker study');
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);