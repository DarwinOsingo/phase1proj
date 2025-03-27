// app.js

document.addEventListener("DOMContentLoaded", function () {
    const API_URL = 'http://localhost:3000/opportunities'; // JSON server endpoint
    const opportunityList = document.getElementById('opportunity-list');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const toggleModeBtn = document.getElementById('toggle-mode');
    let opportunities = [];
    // Initialize Leaflet map
    const map = L.map("map").setView([0, 0], 2); // Default world view

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    // Fetch opportunities from JSON server
    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            opportunities = data;
            renderOpportunities(opportunities);
        })
        .catch((err) => console.error("Error fetching data:", err));

        // Render opportunity cards & map markers
    function renderOpportunities(data) {
        opportunityList.innerHTML = "";
 // Clear existing markers from the map
 map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
        map.removeLayer(layer);
    }
});

data.forEach((opportunity) => {
    // Create a card for each opportunity
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${opportunity.title}</h3>
        <p><strong>Organization:</strong> ${opportunity.organization}</p>
        <p><strong>Location:</strong> ${opportunity.location}</p>
        <p><strong>Sector:</strong> ${opportunity.sector}</p>
        <p>${opportunity.description}</p>
        <button class="save-btn">Save</button>
    `;
    // Save button functionality
            card.querySelector(".save-btn").addEventListener("click", () => {
                alert(`Saved "${opportunity.title}" to your list!`);
            });

            opportunityList.appendChild(card);

