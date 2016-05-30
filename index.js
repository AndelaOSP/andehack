(() => {
  'use strict';
  const express = require('express');
  const path = require('path');
  const app = express();


  // serve static files
  app.use(express.static(path.join(__dirname, './public')));


  // viewed at http://localhost:3000
  app.get('/', function (req, res) {
    res.sendFile('/index.html', {
      root: './public'
    });
  });


  const server = app.listen(process.env.PORT, () => {
    console.log(`Express server listening on
    ${server.address().port} mode in ${app.get('env')} mode`);
  });

})();
