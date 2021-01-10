document.getElementById("hamburg").addEventListener("click", hamburgerAction);

function hamburgerAction() {
    var hamburger = document.getElementById("hamburg");
    var content = document.getElementById("contentContainer");
    hamburger.classList.toggle("is-active");
    content.classList.toggle("open");
    content.classList.toggle("closed");
    if(content.classList.contains("open")){
    zIndex(500);
    }
    else{
        var up = document.getElementById("up");
        var down = document.getElementById("down");
        up.classList.toggle("visible");
        up.classList.toggle("invisible");
        down.classList.toggle("visible");
        down.classList.toggle("invisible");
    }
}

document.getElementById("up").addEventListener("click", function() {
    var h = document.documentElement.clientHeight;
    var container = document.getElementById('mainContent');
    container.scrollBy(0, -h);
});

document.getElementById("down").addEventListener("click", function() {
    var h = document.documentElement.clientHeight;
    var container = document.getElementById('mainContent');
    container.scrollBy(0, h);
});

async function zIndex(time){    
    var result = await sleep(time);
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
        var up = document.getElementById("up");
        var down = document.getElementById("down");
        up.classList.toggle("visible");
        up.classList.toggle("invisible");
        down.classList.toggle("visible");
        down.classList.toggle("invisible");
    }, time);
  });
}

var visibleY = function(el) {
  var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
    el = el.parentNode;
  do {
    rect = el.getBoundingClientRect();
    if (top <= rect.bottom === false) return false;
    // Check if the element is out of view due to a container scrolling
    if ((top + height) <= rect.top) return false
    el = el.parentNode;
  } while (el != document.body);
  // Check its within the document viewport
  return top <= document.documentElement.clientHeight;
};

function attachEvent(element, event, callbackFunction) {
    if (element.addEventListener) {
        element.addEventListener(event, callbackFunction, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, callbackFunction);
    }
};

var update = function(){
    if(visibleY(document.getElementById('header'))) {
        up.classList.remove("visible");
        up.classList.add("invisible");
        hamburg.classList.remove("hamburger-position");
        hamburg.classList.add("invisible");
    }
    else
    {
        up.classList.add("visible");
        up.classList.remove("invisible");
        hamburg.classList.add("hamburger-position");
        hamburg.classList.remove("invisible");
    }
    if(visibleY(document.getElementById('checkBottom'))) {
        down.classList.remove("visible");
        down.classList.add("invisible");
    }
    else
    {
        down.classList.add("visible");
        down.classList.remove("invisible");
    }

    if(visibleY(document.getElementById('checkContent'))) {
        contentContainer.classList.remove("home-background");
        contentContainer.classList.add("content-background");
    }
    if(visibleY(document.getElementById('checkContentTop'))) {
        contentContainer.classList.add("home-background");
        contentContainer.classList.remove("content-background");
    }
};

attachEvent(document.getElementById('mainContent'), "scroll", update);
attachEvent(window, "resize", update);
update();