const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const port = 3087;
app.listen( port, () => { console.log(`It's Magic! ${port}` ); } );