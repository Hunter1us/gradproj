const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  axios({
    method: 'get',
    crossDomain: true,
    url: 'https://api.vk.com/method/groups.get?user_id=70281897&access_token=14d5129446eaf1c8c73e72c47d8403e972bce699ad7d2f781eb97663267c9f35d4c9756acbf7c4beed97d&v=5.84',
  }).then((responce) => {
    res.status(200).send(JSON.stringify(responce.data.response.items));
  }).catch((err) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
