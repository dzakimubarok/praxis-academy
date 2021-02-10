
document.getElementById("Idsubmit").addEventListener("click", show);

function show() {
  var maxAge = 100;
  var numPerDay = document.getElementById('numPerDay').value;
  var age = document.getElementById('age').value;
  if (age > 100 ) {
    var totalNeeded = (numPerDay * 365) * Math.abs(maxAge - age);
  }else {
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
  }
  var tampil  = document.getElementById('tampil');
  var text = document.createTextNode (`You will need  ${totalNeeded} cups of tea to last you until the ripe old age of ${maxAge}`)
  tampil.appendChild(text);

}  