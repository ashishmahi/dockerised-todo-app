const express = require('express');
const app = express();
const PORT = 3000;
const TODO_APP = process.env.TODO_APP;
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));



app.get('/todos', (req, res) =>  {
    const form = "</p><form action='/todos' method='post'> <input name='details' type='text'>" +
    "<button> Save </button></form>"
    const URL = TODO_APP+"/todos";
    request.get(URL,(err,response,body)=>{
        if(err) return console.log(err);
        const content = `${form}<br/><br/>${body}`;
        res.send(content);
    })
});

app.post('/todos', (req, res) =>  {
    const URL = TODO_APP+"/todos";
    request.post(URL, 
    {form:{ details: req.body.details }}, 
    function(error, response, body){
    if(err)console.log(err);
    res.redirect('/todos');
});
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));