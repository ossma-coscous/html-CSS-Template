function initMap() {
  // Define the location (latitude and longitude)
  const location = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco

  // Create a map centered at the location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, // Adjust the zoom level
    center: location,
  });

  // Add a marker at the location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Our Location", // Marker title
  });
}
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("open");
}