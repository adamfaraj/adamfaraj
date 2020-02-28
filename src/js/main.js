(function($) {

  let dom;

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
  }

  const bindEventHandlers = function() {
    dom.title[0].addEventListener("load", pageLoad());
    dom.skillsLink[0].addEventListener("click", skillClick);
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
