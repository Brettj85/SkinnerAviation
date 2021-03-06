document.getElementById("hamburg").addEventListener("click", hamburgerAction);
document.getElementById("CFIS").addEventListener("click", cfiSwap);
document.getElementById("CFIS2").addEventListener("click", cfiSwap);
document.getElementById("CFISExpand").addEventListener("click", cfiExpand);
document.getElementById("despanPicture").addEventListener("click", closePic);


var base_resource = document.querySelectorAll(".menu-item");
for (var i = 0; i < base_resource.length; i++) {
  base_resource[i].addEventListener("click", function(e) {
    scrollPageTo(this.getAttribute("aria-label"));
    e.preventDefault();
  });
}

var base_resource = document.querySelectorAll(".expand-pic");
for (var i = 0; i < base_resource.length; i++) {
  base_resource[i].addEventListener("click", function(e) {
    expandPicture(this.getAttribute("label"));
    e.preventDefault();
  });
}

function expandPicture(element) {
    document.getElementById("hdc").classList.toggle("invisible");
    document.getElementById("hdc").classList.toggle("visible");
    var PlacePicture = document.getElementById('hiddenContainer');
    switch (element) {
    case "picture1":
        if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic1r")
        
    break;
    case "picture2":
        if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic2r")
    break;
    case "picture3":
        if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic3r")
    break;
    case "picture4":
       if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic4r")
    break;
    case "picture5":
       if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic5r")
    break;
    case "picture6":
       if (PlacePicture.classList.contains("pic1r")){
            PlacePicture.classList.remove("pic1r")
        }

        if (PlacePicture.classList.contains("pic2r")){
            PlacePicture.classList.remove("pic2r")
        }

        if (PlacePicture.classList.contains("pic3r")){
            PlacePicture.classList.remove("pic3r")
        }

        if (PlacePicture.classList.contains("pic4r")){
            PlacePicture.classList.remove("pic4r")
        }

        if (PlacePicture.classList.contains("pic5r")){
            PlacePicture.classList.remove("pic5r")
        }

        if (PlacePicture.classList.contains("pic6r")){
            PlacePicture.classList.remove("pic6r")
        }

        PlacePicture.classList.add("pic6r")
    break;
    }
    zIndex(500);
    document.getElementById("hiddenContainer").classList.toggle("pic-closed");
    document.getElementById("hiddenContainer").classList.toggle("pic-open");
}

function closePic(){
    document.getElementById("hdc").classList.toggle("invisible");
    document.getElementById("hdc").classList.toggle("visible");
    document.getElementById("hiddenContainer").classList.toggle("pic-closed");
    document.getElementById("hiddenContainer").classList.toggle("pic-open");
}


function scrollPageTo(target) {
    var myElement;
    switch (target) {
    case "Home":
        myElement = document.getElementById('header');
    break;
    case "About":
        myElement = document.getElementById('about');
    break;
    case "Services":
        myElement = document.getElementById('services');
    break;
    case "Contact":
        myElement = document.getElementById('contact');
    break;
    }
    var topPos = myElement.offsetTop;
    document.getElementById('mainContent').scrollTop = topPos;
    zIndex(500);
    hamburgerAction()
}

function cfiSwap() {
    var cfi = document.getElementById("cfi2");
    cfi.classList.toggle("cfi-open");
    cfi.classList.toggle("cfi-closed");        
}

function cfiExpand() {
    var cfi2 = document.getElementById("cfi2");
    var cfi1 = document.getElementById("cfi1");
    var cfise = document.getElementById("CFISExpand");
    cfi2.classList.toggle("cfi-2-expanded");
    cfi1.classList.toggle("expanded-cfi");
    var cfiMain = document.getElementById("cfimain");
    cfiMain.classList.toggle("expanded-cfi"); 
    var aboutR = document.getElementById("aboutRight");
    aboutR.classList.toggle("about-right-expanded");
    var aboutT = document.getElementById("aboutTop");
    aboutT.classList.toggle("fix-flex");
    var aboutR = document.getElementById("aboutRight")
    // aboutR.classList.toggle("row");
    aboutR.classList.toggle("column");
    document.getElementById("businessOne").classList.toggle("rev-rotate");
    document.getElementById("businessTwo").classList.toggle("rev-rotate");
    if(cfiMain.classList.contains("expanded-cfi")){
        cfise.innerHTML="Less Info";
    }
    else{
        cfise.innerHTML="More Info";
    }
}

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
        // var up = document.getElementById("up");
        // var down = document.getElementById("down");
        // up.classList.toggle("visible");
        // up.classList.toggle("invisible");
        // down.classList.toggle("visible");
        // down.classList.toggle("invisible");
    }
}

// document.getElementById("up").addEventListener("click", function() {
//     var h = document.documentElement.clientHeight;
//     var container = document.getElementById('mainContent');
//     container.scrollBy(0, -h);
// });

// document.getElementById("down").addEventListener("click", function() {
//     var h = document.documentElement.clientHeight;
//     var container = document.getElementById('mainContent');
//     container.scrollBy(0, h);
// });

async function zIndex(time){
    var result = await sleep(time);
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
        // var up = document.getElementById("up");
        // var down = document.getElementById("down");
        // up.classList.toggle("visible");
        // up.classList.toggle("invisible");
        // down.classList.toggle("visible");
        // down.classList.toggle("invisible");
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
    // if(visibleY(document.getElementById('header'))) {
    //     up.classList.remove("visible");
    //     up.classList.add("invisible");
    //     hamburg.classList.remove("hamburger-position");
    //     hamburg.classList.add("invisible");
    // }
    // else
    // {
    //     up.classList.add("visible");
    //     up.classList.remove("invisible");
    //     //hamburg.classList.add("hamburger-position");
    //     //hamburg.classList.remove("invisible");
    // }
    // if(visibleY(document.getElementById('checkBottom'))) {
    //     down.classList.remove("visible");
    //     down.classList.add("invisible");
    // }
    // else
    // {
    //     down.classList.add("visible");
    //     down.classList.remove("invisible");
    // }
    if(visibleY(document.getElementById('header'))) {
        contentContainer.classList.remove("home-background");
        contentContainer.classList.add("content-background");
    }
    if(visibleY(document.getElementById('about'))) {
        contentContainer.classList.remove("home-background");
        contentContainer.classList.add("content-background");
    }
    if(visibleY(document.getElementById('services')) && !visibleY(document.getElementById('about'))) {
        contentContainer.classList.add("home-background");
        contentContainer.classList.remove("content-background");
    }
    if(visibleY(document.getElementById('contact'))) {
        contentContainer.classList.add("home-background");
        contentContainer.classList.remove("content-background");
    }
};

attachEvent(document.getElementById('mainContent'), "scroll", update);
attachEvent(window, "resize", update);
update();





