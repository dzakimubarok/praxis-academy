const axios = require('axios');

async function getUser() {
  try {
    let arr = []
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    const dataUser = await response.data
    // 
    for (let i = 0; i < dataUser.length ; i++ ) {
      if (dataUser[i].id % 2 != 0) {
        arr = dataUser[i]
      
      console.log(arr)
      }
            
    }
    
  } catch (error) {
    console.error(error);
  }
}

getUser();

// //////////////////////////////////////////////////////////////////////////////////////////////////////////



