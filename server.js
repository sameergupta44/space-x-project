
var express = require('express');
var app = express();
app.use(express.static('./dist/space-x-project'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/space-x-project/'});
});
app.listen(process.env.PORT || 8080);
