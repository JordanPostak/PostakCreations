var slideIndex = [1,1,1,1,1,1];
                    var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
                    var dot = ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6"]
                    showSlides(1, 0);
                    showSlides(1, 1);
                    showSlides(1, 2);
                    showSlides(1, 3);
                    showSlides(1, 4);
                    showSlides(1, 5);
                    function plusSlides(n, no) {
                      showSlides(slideIndex[no] += n, no);
                    }
                    function currentSlide(n, no) {
                      showSlides(slideIndex[no] = n, no);
                    }
                    function showSlides(n, no) {
                      var i;
                      var x = document.getElementsByClassName(slideId[no]);
                      var dots = document.getElementsByClassName(dot[no]);
                      if (n > x.length) {slideIndex[no] = 1}    
                      if (n < 1) {slideIndex[no] = x.length}
                      for (i = 0; i < x.length; i++) {
                         x[i].style.display = "none";  
                      }
                      for (i = 0; i < dots.length; i++) 
                      {
                      dots[i].className = dots[i].className.replace(" active", "");
                      }
                      x[slideIndex[no]-1].style.display = "block";
                      dots[slideIndex[no]-1].className += " active"  
                    }