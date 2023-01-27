const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());

var config = {
    method: 'get',
    url: 'http://172.20.0.2:3000/data',
    headers: {}
};

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/container-1", (req, res) => {
    res.send({
        id: 1,
        name: 'Rabiul Hasan'
    })
});


app.get('/container-2-data', (req, res) => {
    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data))
        })
        .catch(function (error) {
            res.send(JSON.stringify(error))
        });

});