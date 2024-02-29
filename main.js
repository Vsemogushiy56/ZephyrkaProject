// Flag pentru a verifica dacă animația a fost deja pornită
let animationStarted = false;

// Counter function
function startCountingAnimation() {
  const counters = document.querySelectorAll('.count');
  const speed = 35;

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = Math.trunc(target / speed);

    const updateCount = () => {
      const count = parseInt(counter.innerText);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Function to check if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
}

// Scroll event listener
window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');

  if (isInViewport(about) && !about.classList.contains('active') && !animationStarted) {
    about.classList.add('active');
    animationStarted = true; // Setăm flagul pentru a marca că animația a început
    startCountingAnimation();
  }
});




// Animation Section title
window.addEventListener('scroll', () => {
  function getSpaceBetweenTopAndElement() {
    let elements = document.querySelectorAll(".section-title");
    
    elements.forEach((element) => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = '1';
        element.classList.add("animate__backInLeft");
      }
    });
  }
  getSpaceBetweenTopAndElement();
});
 

// work section
//filter tab
const tabs = document.querySelectorAll(".portfolio-filter li")

function changeColor()
{
  tabs.forEach((tab)=>{
    tab.classList.remove("current");

  })
  this.classList.add("current");

}

tabs.forEach((tab)=>{
  tab.addEventListener('click', changeColor);
})

//MixItUp
let containerEl = document.querySelectorAll(".work-items");
let mixer = mixitup(containerEl, {
  selectors: {
    target: ".work-item",

  },
  animation:{
    duration: 550,
  }
})


//Blur efffect 
$(document).ready(function () {
  $('.portfolio-links ion-icon[name="eye-outline"]').on('click', function () {
    var imageUrl = $(this).closest('.work-item').find('img').attr('src');
    var modalHtml = '<div class="modal-blur"></div><div class="modal"><img src="' + imageUrl + '"></div>';
    $('body').append(modalHtml);
    $('.modal img').css('filter', 'blur(0)'); // Faceți imaginea clară inițial
    $('.modal-blur').fadeIn();
    $('.modal').fadeIn();

    // Închideți modalul la apăsarea tastei Esc
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
        $('.modal img').css('filter', 'blur(5px)'); // Adăugați blur înapoi atunci când se închide
        $('.modal, .modal-blur').fadeOut(function () {
          $(this).remove();
        });
      }
    });

    // Închideți modalul la clic în afara imaginii
    $('.modal-blur').on('click', function () {
      $('.modal img').css('filter', 'blur(5px)'); // Adăugați blur înapoi atunci când se închide
      $('.modal, .modal-blur').fadeOut(function () {
        $(this).remove();
      });
    });
  });
});

// Swiper
var swiper = new Swiper(".reviews-top", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


//header active
window.addEventListener('scroll', ()=>{
  function getClassActive(){
    let elements = document.querySelectorAll("section[id]");
    elements.forEach((element)=>{
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if(space < 400)
      {
        let AttId = element.getAttribute('id');
        let menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((menuItem)=>{
          menuItem.classList.remove('active');
          if(menuItem.getAttribute('data-id') === AttId){
            menuItem.classList.add('active');
          }
        })
      }
    })
  }
})


//menu toggle icon
let menuToggle = document.querySelector('.menu-icon');
menuToggle.addEventListener('click', ()=>{
  menuToggle.classList.toggle('active');
  if(menuToggle.classList.contains('active'))
{
    document.querySelector('.desktop-header').style.transform = "translateX(0)";
    menuToggle.style.transform = "translate(100px)";


  }else {
    document.querySelector('.desktop-header').style.transform = "translateX(-120px)";
    menuToggle.style.transform = "translate(0)";
  }
})

