document.addEventListener('DOMContentLoaded', async () => {
    const aboutData = await utils.fetchCSV(CONFIG.SHEETS.ABOUT);
    const container = document.getElementById('aboutContent');

    if (aboutData.length > 0) {
        const content = `
            <h3>Our Story</h3>
            <p>${aboutData[0].story}</p>
            <h3>Our Mission</h3>
            <p>${aboutData[0].mission}</p>
        `;
        container.innerHTML = content;
    }
});

