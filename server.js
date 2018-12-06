var express = require('express');
var graphQl = require('express-graphql');
var schema = require('./data/schema');

var app = express();

app.use('/graphql', graphQl({ schema:schema, pretty:true , graphiql: true}));


app.listen(3000,function(){
    console.log("Server On");
})