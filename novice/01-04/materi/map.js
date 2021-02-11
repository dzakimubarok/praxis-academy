// const makanan = ['bakso', 'sate', 'burger', 'pizza']

// const listmakanan = makanan.map((value, index, arr) => {
//   return ` ${index} menu adalah ${value}, dari menu ${arr}`
// })

// console.log(listmakanan);
//membuat map baru
// const myMap = new Map()

// mendeklarasikan sebuah objek
// const string = 'string'
// const makanan = () => {}
// const object = {}

// meletakkan  value 'bakso' pada key objek makanan yng telah dibuat
// myMap.set(string, 'map membuat nilai baru terhadap  nilai mahasiswa')
// myMap.set(makanan, 'map membuat nilai baru terhadap  nilai mahasiswa')
// myMap.set(object, 'map membuat nilai baru terhadap  nilai mahasiswa')

//menampilkan value yang telah diletakkan 
// console.log(myMap.get(makanan));
// console.log(myMap.size) => menghitung jumlah map 

// const map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
// console.log( map.get(1)   ); // 'num1'
// console.log( map.get('1') ); // 'str1'

// console.log( map.size ); // 3

const map = new Map([
  
])

map.set('firstName', 'Luke')
map.set('lastName', 'Skywalker')
map.set('occupation', 'Jedi Knight')

// console.log( map.get("firstName") );
console.log( map.has('lastName'));
// console.log( map.has('kekuatan'));
// console.log( map.size);
// console.log( map.delete('lastName'));
// console.log( map.clear);
// console.log( map.keys());
// console.log( map.values());
// console.log( map.entries());
