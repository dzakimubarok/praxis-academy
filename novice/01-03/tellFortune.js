// function tellFortune(jobTitle, geolocation, partner, numKids ) {
//   var masaDepan = `You Will be a ${jobTitle} in ${geolocation} and married to ${partner} with ${numKids} kids <br>`;
//   document.write(masaDepan);
// }

// tellFortune('Progammer', 'LA', 'Jessica', 3);
// tellFortune('Penari', 'US', 'Siti', 3);
// tellFortune('Pelukis', 'Bali', 'Nawangwulan', 3);
document.getElementById("Idsubmit").addEventListener("click", show);

function show( ) { 
  var partner = document.getElementById('nama').value;
  var jobTitle = document.getElementById('jobtitle').value;
  var geolocation = document.getElementById('lokasi').value;
  var numKids = document.getElementById('anak').value;
  var tampil = document.getElementById('tampil');
  var text = document.createTextNode(`You Will be a ${jobTitle} in ${geolocation} and married to ${partner} with ${numKids} kids`)
  tampil.appendChild(text);
}
