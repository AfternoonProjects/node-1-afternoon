const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./messages_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const messageBaseUrl = "/api/messages";

// Post Request with Associated Endpoint
app.post( messageBaseUrl, mc.create);

// Get Request with Associated Endpoint
app.get( messageBaseUrl, mc.read);

// ----- Note -----
// For the put and delete endpoints, we need to add on a url parameter of id.
// A url paramter can be defined by adding :variableName when making the URL for an endpoint.

// ----- Note -----
// Look at the difference between put,delete and post,get

// Put Request with Associated Endpoint
app.put( `${messageBaseUrl}/:id`, mc.update);

// Delete Request with Associated Endpoint
app.delete( `${messageBaseUrl}/:id`, mc.deleteMessage);

// ----- Note -----
// A map of what happens when certain requests come through
// http://localhost:3087 ( POST )- create from messages_controller executes - responds with messages array
// http://localhost:3087 ( GET ) - read from messages_controller executes - responds with messages array
// http://localhost:3001 ( PUT ) - update from messages_controller executes - responds with messages array
// http://localhost:3001 ( DELETE ) - delete from messages_controller executes - responds with messages array

const port = 3001;

app.listen( port, () => { console.log(`It's Magic! ${port}` ); } );