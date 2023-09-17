const cards = document.querySelectorAll('.experience');

function checkCardVisibility() {
  cards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowPosition = window.innerHeight;

    if (cardPosition < windowPosition) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkCardVisibility);
