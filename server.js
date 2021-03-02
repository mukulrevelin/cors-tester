var serveStatic = require('serve-static');
var connect = require("connect")
   connect().use(serveStatic(__dirname)).listen(8080, function(){
       console.log('Server running on 8080...');
   });
