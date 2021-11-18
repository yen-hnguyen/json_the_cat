const request = require('request');

let breed = process.argv.splice(2);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log(error.message);
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    return console.log(`${breed} is not found`);
  }
  console.log(data[0].description);
});