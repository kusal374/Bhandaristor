document.addEventListener('DOMContentLoaded', async () => {
    // Directly use the Google Sheets CSV link
    const products = await utils.fetchCSV('https://docs.google.com/spreadsheets/d/e/2PACX-1vQpcR_bPO6q1IAoWvem5y5Fao2ilLyPY9A9Pt5UNpDsiBY2aefwxRjsSdsmV9uv54t8sVVNu9mjsJWo/pub?output=csv');
    
    const container = document.getElementById('productsGrid');

    // Loop through the products data and create product cards
    products.forEach(product => {
        const card = utils.createProductCard(product);
        
        // Add event listener to show product details on image click
        card.querySelector('img').addEventListener('click', () => showProductDetails(product));
        
        // Append the product card to the container
        container.appendChild(card);
    });
});

function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    
    // Populate modal with product details
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `Price: ₹${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;
    
    // Show the modal
    utils.showModal('productModal');
}

