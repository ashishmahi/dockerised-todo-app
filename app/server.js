const express = require('express');
const app = express();
const PORT = 3000;
const TODO_APP = process.env.TODO_APP;
const request = require('request');


app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));



app.get('/todos', (req, res) =>  {
    const URL = TODO_APP+"/todos";
    request.get(URL,(err,response,body)=>{
        if(err) return console.log(err);
        res.json(body);
    })
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));