let dictionary = new Map();
dictionary.set("eat", "makan");
dictionary.set("learn", "belajar");
dictionary.set("make", "buat");
console.log(dictionary);
// dictionary.delete("eat");
// console.log(dictionary);
function show() {
var bahasaIndonesia = document.getElementById('bahasaIdn').value;
if (dictionary.has(bahasaIndonesia)) {
  console.log(dictionary.get(bahasaIndonesia))
  var tampil  = document.getElementById('tampil');
  var text = document.createTextNode (`bahasa indonesianya  ${bahasaIndonesia} adalah ${dictionary.get(bahasaIndonesia)}`)
  tampil.appendChild(text);
} 
else {
  console.log('no')
}
}
document.getElementById("Idsubmit").addEventListener("click", show);
