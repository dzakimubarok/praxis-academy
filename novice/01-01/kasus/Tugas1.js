document.getElementById("Idsubmit").addEventListener("click", show);

function show() {
  var nama=document.getElementById("Idnama").value;
  document.getElementById("Idname").innerHTML=nama;
  var alamat=document.getElementById("Idalamat").value;
  document.getElementById("Idaddress").innerHTML=alamat;
  var graduate=document.getElementById("Idlulusan").value;
  document.getElementById("Idgraduate").innerHTML=graduate;
}