
$(document).ready(function () 
{
$(".nav-link").css("font-size",20);
$(".nav-link.active").css("font-weight","bold");
//$(".navbar-brand").style("display","flex");
});
//mapa
function initMap() {
 
  const uluru = { lat: 51.237, lng: 22.549 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.initMap = initMap;

function kantor(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputPLN").innerHTML = valNum * 4.34;
}



