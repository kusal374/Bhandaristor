const utils = {
    async fetchCSV(sheetId) {
        try {
            const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            return this.parseCSV(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    },

    parseCSV(csv) {
        try {
            const lines = csv.split('\n');
            const headers = lines[0].split(',');
            return lines.slice(1).map(line => {
                const values = line.split(',');
                return headers.reduce((obj, header, index) => {
                    obj[header.trim()] = values[index]?.trim() || '';
                    return obj;
                }, {});
            });
        } catch (error) {
            console.error('Error parsing CSV:', error);
            return [];
        }
    },

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <a href="tel:${CONFIG.PHONE}" class="call-btn">CALL TO ORDER</a>
        `;
        return card;
    },

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.style.display = 'block';
        
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.onclick = () => modal.style.display = 'none';
        }
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
};

