document.addEventListener('DOMContentLoaded', async () => {
    const products = await utils.fetchCSV(CONFIG.SHEETS.PRODUCTS);
    const container = document.getElementById('productsGrid');

    products.forEach(product => {
        const card = utils.createProductCard(product);
        card.querySelector('img').addEventListener('click', () => showProductDetails(product));
        container.appendChild(card);
    });
});

function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `Price: ₹${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;
    utils.showModal('productModal');
}

