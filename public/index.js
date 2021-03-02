let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 8,
  });

  const ashkelon = { lat: 31.6688, lng: 34.5743 };
  new google.maps.Marker({
    position: ashkelon,
    map: map,
  });
  const telaviv = { lat: 32.6688, lng: 35.5743 };
  new google.maps.Marker({
    position: telaviv,
    map: map,
  });
  const jerusalem = { lat: 33.6688, lng: 32.5743 };
  new google.maps.Marker({
    position: jerusalem,
    map: map,
  });
}

// ---------
function usersFunction(users){
    console.log('users js')
    users.array.forEach(user => {
        new google.maps.Marker({
            position: { lat: user.location_latitude, lng: user.location_longitude},
            map: map,
        });
    });
}
// ----------

function locationFunction(location) {
  switch (location) {
    case 'australia':
        map.setCenter({ lat: -24.99229, lng: 115.22492 })
        break;
    case 'israel':
        map.setCenter({ lat: 31.0461, lng: 34.8516 })
        break;   
    case 'usa':
        map.setCenter({ lat: 37.27557, lng: -104.65713 })
        break;
    case 'france':
        map.setCenter({ lat: 46.2276, lng: 2.2137 })
        break;
    case 'japan':
        map.setCenter({ lat: 36.2048, lng: 138.2529 })
        break;
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}