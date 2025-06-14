$(document).ready(function() {
    // تهيئة السلايدر الرئيسي
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: false
    });

    // تهيئة سلايدر المدونة
    $('.blog-slider').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // تفاعل زر ابدأ الآن
    $('.start-btn').click(function() {
        alert('تم النقر على زر ابدأ الآن!');
    });
});


function filterPortfolio(category) {
            const cards = document.querySelectorAll('.portfolio-card');
            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            document.querySelectorAll('.portfolio-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelector(`.portfolio-tab[onclick="filterPortfolio('${category}')"]`).classList.add('active');
        }


  



















    

   document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // No additional scripting needed for this footer
});



//
//document.addEventListener("DOMContentLoaded", function () {
 //   const cards = document.querySelectorAll(".service-card");
  //  cards.forEach((card, index) => {
   //   const direction = index % 2 === 0 ? "animate-left" : "animate-right";
  //    setTimeout(() => {
   //     card.classList.add(direction);
     // }, index * 150); // delay 150ms بين كل كارت والتاني
    //});
  //});
//

document.addEventListener("DOMContentLoaded", function () {
    const servicesSection = document.querySelector(".services");
    const cards = servicesSection.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            const direction = index % 2 === 0 ? "animate-right" : "animate-left";
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add(direction);
          });
          observer.unobserve(servicesSection);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(servicesSection);
  });





  