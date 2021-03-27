const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/angular-material-eleven');
});
app.use(express.static( __dirname + '/dist'));



  process.env.PORT = process.env.PORT || 8080;

  app.listen(process.env.PORT, () => console.log('Listening to port: ' + process.env.PORT) );