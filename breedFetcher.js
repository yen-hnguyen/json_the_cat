const request = require('request');

// request('https://api.thebatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
//   if (error) {
//     return console.log(error);
//   }

//   const data = JSON.parse(body);

//   if (data.length === 0) {
//     return console.log(`Sib is not found`);
//   }
//   console.log(data[0].description);
// });


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