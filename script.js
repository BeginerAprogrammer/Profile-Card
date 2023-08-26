function toggleDetails() {
    const details = document.querySelector('.more-details');
    const btn = document.querySelector('button');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        btn.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        btn.textContent = 'Show More';
    }
}

function changeBgColor(card) {
    card.style.backgroundColor = '#e6e6e6';
}

function resetBgColor(card) {
    card.style.backgroundColor = '#fff';
}
