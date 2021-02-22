const axios = require('axios');

async function getUser() {
  try {
    let arr = []
    let error;
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    const dataUser = await response.data

    if (dataUser != null) {
      for (let i = 0; i < dataUser.length ; i++ ) {
        if (dataUser[i].id % 2 != 0) {
          arr = dataUser[i]
        
        console.log(arr)
        }
  
      }

    } else {
      throw new Error('data tidak ditemukan');
    }
    
    
  } catch (err) {
    console.log(err)
  }
}

getUser();