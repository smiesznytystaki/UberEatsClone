const restaurantsData = [
    {
        id: 1,
        name: "McDonald's® (Świętokrzyska)",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "9,99 zł",
        deliveryTime: "15-25 min",
        rating: "4.6"
    },
    {
        id: 2,
        name: "Pizza Hut (Złote Tarasy)",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "12,00 zł",
        deliveryTime: "30-45 min",
        rating: "4.2"
    },
    {
        id: 3,
        name: "Kebab King (Centrum)",
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "4,99 zł",
        deliveryTime: "20-30 min",
        rating: "4.8"
    },
    {
        id: 4,
        name: "Sushi Mushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "14,99 zł",
        deliveryTime: "40-50 min",
        rating: "4.9"
    },
    {
        id: 5,
        name: "Vegan Ramen Shop",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "8,99 zł",
        deliveryTime: "25-35 min",
        rating: "4.7"
    },
    {
        id: 6,
        name: "Starbucks (Nowy Świat)",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
        deliveryFee: "5,99 zł",
        deliveryTime: "10-20 min",
        rating: "4.4"
    }
];



function renderRestaurants() {
    const container = document.getElementById('restaurant-grid');
    const restaurantsHTML = restaurantsData.map(restaurant => `
        <article class="restaurant-card">
            <img class="card-image" src="${restaurant.image}" alt="${restaurant.name}">
            <div class="card-header">
                <h3 class="card-title">${restaurant.name}</h3>
                <span class="rating">${restaurant.rating}</span>
            </div>
            <div class="card-info">
                <span>Dostawa: ${restaurant.deliveryFee}</span> • 
                <span>${restaurant.deliveryTime}</span>
            </div>
        </article>
    `).join('');
    
    container.innerHTML = restaurantsHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
});