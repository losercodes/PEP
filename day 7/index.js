let cityContainer = document.querySelector("#city-container");
const API_BASE_URL = 'https://makemytrip-backend-w2d2.onrender.com/cities';

function createCityCard(image, cityName, description) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = image;

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");

    const textContainer = document.createElement("div");
    const h5 = document.createElement("h5");
    h5.textContent = cityName;
    const h6 = document.createElement("h6");
    h6.textContent = description;

    textContainer.appendChild(h5);
    textContainer.appendChild(h6);
    cardText.appendChild(textContainer);
 
    card.appendChild(cardText);

    return card;
}


fetch(`${API_BASE_URL}/cities`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        for (const city of data) {
            const { city: cityName, description, image } = city;
            const card = createCityCard(image, cityName, description);
            cityContainer.appendChild(card);
        }
    })
    .catch((err) => {
        console.error('Error fetching city data:', err);
        // Display an error message to the user or provide a fallback solution
        cityContainer.innerHTML = '<p>Error loading city data. Please try again later.</p>';
    });


