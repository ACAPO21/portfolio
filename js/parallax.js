window.addEventListener('scroll', function() {
var parallax = document.querySelector('section img');
parallax.style.transform = 'translate3d(0, ' + window.pageYOffset * 1.1 + 'px, 0)';
});