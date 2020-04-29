// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 33.658593, lng: -117.970365};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }