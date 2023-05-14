const searchForm = document.getElementById('search-form');
const resultsContainer = document.getElementById('results-container');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const formattedName = name.replace(/ /g, "_"); 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formattedName}`)
        .then(response => response.json())
        .then(data => {
            const product = data.drinks[0]; // Assuming the API returns an array of drinks

            resultsContainer.innerHTML = '';

            const productName = document.createElement('h2');
            productName.textContent = product.strDrink;

            const productImage = document.createElement('img'); // Changed to <img> element for displaying an image
            productImage.src = product.strDrinkThumb;
            productImage.alt = product.strDrink;

            const productDescription = document.createElement('p'); // Changed to <p> element for description
            productDescription.textContent = product.strInstructions;

            resultsContainer.appendChild(productName);
            resultsContainer.appendChild(productImage);
            resultsContainer.appendChild(productDescription);
        })
        .catch(error => {
            console.error(error); // Display the actual error in the console
        });
});
