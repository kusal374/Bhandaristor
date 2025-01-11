document.addEventListener('DOMContentLoaded', async () => {
    const products = await utils.fetchCSV(CONFIG.SHEETS.PRODUCTS);
    const latestProducts = products.slice(0, 5);
    const container = document.getElementById('latestProducts');

    latestProducts.forEach(product => {
        const card = utils.createProductCard(product);
        container.appendChild(card);
    });
});

