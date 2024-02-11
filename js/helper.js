window.addEventListener('load', function(){
  var newVideo = document.getElementById('video');
  newVideo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

  newVideo.play();

});

function isObj(obj) {
  return (typeof obj === 'object' && obj !== null) ? true : false;
}

function elem(selector, parent = document){
  let elem = parent.querySelector(selector);
  return elem != false ? elem : false;
}

function pushClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? false : elClass.add(targetClass);
  }
}

function deleteClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}

function containsClass(el, targetClass) {
  if (isObj(el) && targetClass && el !== document ) {
    return el.classList.contains(targetClass) ? true : false;
  }
}

(function() {    
  let fixed, nav, scroll;
  fixed = 'fixed';
  scroll = 'scroll';
  nav = elem('.nav-header');
  
  function animateNav() {
    !containsClass(nav, scroll) ? pushClass(nav, scroll) : false;
    setTimeout(function(){
    !containsClass(nav, fixed) ? pushClass(nav, fixed) : false;
    }, 500)
  }
  
  function restoreNav() {
    containsClass(nav, scroll) ? deleteClass(nav, scroll) : false;
    setTimeout(function(){
    containsClass(nav, fixed) ? deleteClass(nav, fixed) : false;
    }, 500)
  }
  
  function fixNav() {
    window.addEventListener('scroll', function(e) {
      let position = window.scrollY;
      if (position > 150) {
        window.requestAnimationFrame(animateNav); 
      } else {
        window.requestAnimationFrame(restoreNav); 
      }
    });
  }
  nav ? fixNav() : false;
})();
