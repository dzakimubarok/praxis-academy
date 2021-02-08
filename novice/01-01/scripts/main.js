const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';//digunakan untuk menampilkan hello world yang ditampilkan h1 pada index menggunakan query selector

let myVariable1 = 'Bob';
console.log(myVariable1);

let myVariable2 = 'Bob';
myVariable = 'Steve';
console.log(myVariable2);

let myVariable3 = 10;
console.log(myVariable3);

let myVariable4 = true;
console.log(myVariable4);

let myVariable5 = [1,'Bob','Steve',10];
console.log(myVariable5[0], myVariable5[2]);

//OPERATORS
//Penjumlahan
var x = 5;
var y = 2;
var z = x + y;
console.log(z);
//perkalian
var a = 5;
var b = 2;
var c = a * b;
console.log(c);
//pengurangan
var d = 5;
var e = 2;
var f = d - e;
console.log(f);

var h = 5;
var i = 2;
var j = h / i;
console.log(c);
//Assignment
let myVariable6 = 'Bob';
console.log(myVariable6);

var esKrim = 'coklat';
if (esKrim === 'coklat') {
  alert('Yay, Aku suka eskrim coklat!');
} else {
  alert('Hahhh, tapi sukanya coklat...');
}

var myVariable = document.querySelector('h1');
alert('Halo!');

var x = kalikan(4,7);// deklarasi variable yang nantinya akan dipanggil pada saat fungsi berjalan
var y = kalikan(20,20);
var z = kalikan(0.5,3);

function kalikan(angka1,angka2) { // pada bagian ini fungsi kalikan memanggil nilai yang ada pada variable x,y,z
  hasil = angka1 * angka2;
  return hasil;
}
console.log(x); // pada bagian ini hasil dari return akan ditampilkan
console.log(y);
console.log(z);


document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
}


