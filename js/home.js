document.addEventListener('DOMContentLoaded', async () => {
    try {
        const products = await utils.fetchCSV(CONFIG.SHEETS.PRODUCTS);
        const latestProducts = products.slice(0, 6);
        const container = document.getElementById('latestProducts');
        
        if (container) {
            if (latestProducts.length === 0) {
                container.innerHTML = '<p class="error">No products available</p>';
                return;
            }

            latestProducts.forEach(product => {
                const card = utils.createProductCard(product);
                container.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error loading products:', error);
        const container = document.getElementById('latestProducts');
        if (container) {
            container.innerHTML = '<p class="error">Failed to load products</p>';
        }
    }
});

