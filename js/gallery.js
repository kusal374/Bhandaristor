document.addEventListener('DOMContentLoaded', async () => {
    const images = await utils.fetchCSV(CONFIG.SHEETS.GALLERY);
    const container = document.getElementById('galleryGrid');

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image.url}" alt="${image.caption}" loading="lazy">`;
        item.addEventListener('click', () => showGalleryImage(image));
        container.appendChild(item);
    });
});

function showGalleryImage(image) {
    const modal = document.getElementById('galleryModal');
    document.getElementById('modalGalleryImage').src = image.url;
    document.getElementById('modalGalleryCaption').textContent = image.caption;
    utils.showModal('galleryModal');
}

