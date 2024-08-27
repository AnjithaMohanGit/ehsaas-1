$('.review-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  document.addEventListener('DOMContentLoaded', function() {
    let titles = ["Ehsaas", "🌿ayurveda treatments",];
    let index = 0;
    
    setInterval(function() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 800);
});


////////navbar collapse fixed
function showNav(){
  let nav=document.getElementById('navbarTogglerDemo02')
  nav.classList.add('fixed')
}
function closeNav(){
  let nav=document.getElementById('navbarTogglerDemo02')
  nav.classList.remove('fixed')
}