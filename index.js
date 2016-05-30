(() => {
  'use strict';
  const express = require('express');
  const app = express();


  // viewed at http://localhost:3000
  app.get('/', function(req, res) {
      res.sendFile('/index.html', {
        root:'./public'
      });
  });
  console.log(process.env.PORT)
  const server = app.listen(process.env.PORT, () => {
  console.log(`Express server listening on
    ${server.address().port} mode in ${app.get('env')} mode`);
});

})();
