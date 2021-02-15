function dewasa(age) {
  console.log(typeof(age));
  if (age >= 20) {
    // console.log("gua udah gede");
    return `umur saya ${age} dan aku dah gede`;
  }
  else {
    console.log("bocil");
    return `aku masih anak anak ${age} tahun`;
  }
 
}

cuy = dewasa(12)
console.log(cuy)
