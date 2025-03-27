# Community Volunteer Finder

##  Project Description
Community Volunteer Finder is a web application that helps users discover and connect with volunteer opportunities around the world. It integrates a map with location-based volunteer opportunities and provides filtering and search functionalities.

##  Features
- Displays volunteer opportunities with details (title, organization, location, sector, description).
- Interactive map with markers for volunteer locations.
- Search and filter functionalities for opportunities.
- Save favorite opportunities.
- Light/Dark mode toggle.

##  Technologies Used
- HTML, CSS, JavaScript
- Leaflet.js (for maps)
- JSON Server (for mock API)

##  Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/DarwinOsingo/phase1proj.git
Navigate into the project directory:

sh
Copy
Edit
cd community-volunteer-finder
Install dependencies (if any, like JSON Server):

sh
Copy
Edit
npm install
Start the JSON Server:

sh
Copy
Edit
json-server --watch db.json --port 4000 --host 0.0.0.0
Open index.html in a browser or start a local server.

 ## Usage
Search for volunteer opportunities using the search bar.

Filter results by sector.

Click markers on the map to view details.

Save opportunities for future reference.

 ## Troubleshooting
CORS Issue: Ensure the backend (JSON Server) runs on the correct port and allow CORS.

Map Not Loading: Check Leaflet.js integration and API response.

 ## License
This project is licensed under the Moringa schools


 ## Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -m "Added feature XYZ").

Push to your branch (git push origin feature-name).

Open a Pull Request.

 # Acknowledgments
OpenStreetMap & Leaflet.js for mapping features.

JSON Server for simulating a REST API.

