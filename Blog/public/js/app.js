import { OpenStreetMapProvider } from "leaflet-geosearch";

const lat = -33.750466;
const lng = -70.902093;

const map = L.map('map').setView([lat, lng], 12);

document.addEventListener('DOMContentLoaded', () => {

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
    .bindPopup('Dirección Establecida.')
    .openPopup();

})



