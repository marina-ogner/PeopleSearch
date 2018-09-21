const express = require('express');
var request = require('request');
const app = express();
const port = process.env.PORT || 5000;
app.get('/api/:firstName/:lastName/:state', (req, res) => {
  request.get({
    url: `https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=${req.params.firstName}&d_last=${req.params.lastName}&d_state=${req.params.state}`
  },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
});
app.listen(port, () => console.log(`Listening on port ${port}`));