const axios = require('axios');
const express = require('express');
const app     = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/container-2", (req, res) => {
    res.send({
        id: 1,
        name: 'Riyad Islam'
    })
});

app.get('/data', (req, res) => {
    res.send("Hello from container 2. calling from container 1");
    
});