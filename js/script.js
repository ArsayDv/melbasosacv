const bars = document.querySelector('#bars'),
      nav = document.querySelector('#nav');

bars.addEventListener('click', () => {
    nav.classList.toggle('active')
});