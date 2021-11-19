const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatai.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error.message);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(null, `${breedName} is not found`);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };