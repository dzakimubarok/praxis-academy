const axios = require('axios');

// const oddOnly = obj => {
//   if(obj.id % 2 !== 0) {
//     return obj
//   }
// }

// (async() => {
//   let response = await axios.get('http://jsonplaceholder.typicode.com/users');
//   let data = await response.data
//   let mappedData = data.map(oddOnly)
//   console.log(mappedData)
// })();

const oddOnly = obj => {
  return obj.id % 2 !== 0
}

(async () => {
  let response = await axios.get('http://jsonplaceholder.typicode.com/users');
  let data = await response.data;
  let filteredData = data.filter(oddOnly);
  console.log(filteredData);
})(); 