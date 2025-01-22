
// Function to equalize card heights
function equalizeCardHeights() {
    const cards = document.querySelectorAll('.news-card');
    let maxHeight = 0;

    // Reset heights
    cards.forEach(card => {
        card.style.height = 'auto';
    });

    // Find the maximum height
    cards.forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) maxHeight = height;
    });

    // Set all cards to the maximum height
    cards.forEach(card => {
        card.style.height = maxHeight + 'px';
    });
}

// Run the function on page load and resize
window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);
