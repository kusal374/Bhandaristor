const utils = {
    async fetchCSV(sheetId) {
        const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`;
        const response = await fetch(url);
        const data = await response.text();
        return this.parseCSV(data);
    },

    parseCSV(csv) {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        return lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index]?.trim() || '';
                return obj;
            }, {});
        });
    },

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <a href="tel:${CONFIG.PHONE}" class="call-btn">Call to Order</a>
        `;
        return card;
    },

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.onclick = () => modal.style.display = 'none';
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
};

