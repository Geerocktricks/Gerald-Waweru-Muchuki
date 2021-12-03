const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
app.use(compression(express.static(__dirname + '/dist/gerald-waweru-muchuki')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/gerald-waweru-muchuki/index.html'))
});
app.listen(process.env.PORT || 8080);