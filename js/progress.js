window.addEventListener('scroll', function() {
    var progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach(function(progressBar) {
      var progressValue = progressBar.getAttribute('data-progress');
      var rect = progressBar.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        progressBar.style.width = progressValue + '%';
      }
    });
  });
  