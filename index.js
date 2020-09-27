
document.querySelector(".popular").addEventListener('click', function(e){
    if(e.target.classList.contains('menu__overlay')) {
      if(e.target.style.opacity == "1"){
          e.target.style.opacity = "0";
      } else {
        e.target.style.opacity = "1";

      }
    }
    if(e.target.parentElement.classList.contains('menu__overlay')) {
      if(e.target.parentElement.style.opacity == "1"){
        e.target.parentElement.style.opacity = "0";
      } else {
        e.target.parentElement.style.opacity = "1";
      }
    }
  })



function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    // that are fired after touchstart events. Since they're
    // indistinguishable from real events, we use the fact that they're
    // fired a few milliseconds after touchstart to filter them.
    let lastTouchTime = 0
  
    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('hasHover')
    }
  
    function disableHover() {
      document.body.classList.remove('hasHover')
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)
  
    enableHover()
  }
  
  watchForHover()