function parallaxScroll() {
    var scrollPosition = window.pageYOffset;
  
    var images = document.querySelectorAll('section img');
    images.forEach(function(image) {
      var section = image.closest('section');
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionBottom = sectionTop + sectionHeight;
  
      if (scrollPosition + window.innerHeight > sectionTop && scrollPosition < sectionBottom) {
        var parallaxValue = (scrollPosition - sectionTop) * 0.5;
        image.style.transform = 'translate3d(0, ' + parallaxValue + 'px, 0)';
      }
    });
  }
  
  window.addEventListener('scroll', parallaxScroll);
  