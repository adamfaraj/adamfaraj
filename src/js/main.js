(function($) {

  let dom;
  // TODO: add navbar show/hide functionality
  // let lastScrollPosition;
  // let timer = null;

  const init = function() {
    cacheDOM();
    bindEventHandlers();
  }

  const cacheDOM = function() {
    dom = {};
    dom.document = $('body');
    dom.title = dom.document.find(".about__title");
    dom.skillsLink = dom.document.find('.about__skill-link');
    dom.skills = dom.document.find('.skills__header');
    // dom.navbar = dom.document.find('.navbar');
  }

  const bindEventHandlers = function() {
    dom.title[0].addEventListener("load", pageLoad());
    dom.skillsLink[0].addEventListener("click", skillClick);

    // window.addEventListener('scroll', function(e) {
    //   console.log('lastScrollPosition', lastScrollPosition);
    //   lastScrollPosition = e.target.scrollingElement.scrollTop;
    //   console.log('currentScrollPosition', e.target.scrollingElement.scrollTop);

    //   if ((lastScrollPosition == undefined) || lastScrollPosition < e.target.scrollingElement.scrollTop) {
    //     dom.navbar[0].style.marginTop = "-56px";
    //     console.log('scroll down');
    //   } else {
    //     dom.navbar[0].style.marginTop = "0";
    //     console.log('scroll up');
    //   }
    // })
  }

  const pageLoad = function() {
    dom.title[0].style.opacity = 0;
    // dom.title[0].style.position = "1000px";

    var tick = function() {
      dom.title[0].style.opacity = +dom.title[0].style.opacity + 0.01;


      if (dom.title[0].style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 55)
      }

    };



    tick();
  }

  var skillClick = function() {
    $('html, body').animate({
      scrollTop: dom.skills.offset().top
    }, 1000)
  };

  init();
})(jQuery);
