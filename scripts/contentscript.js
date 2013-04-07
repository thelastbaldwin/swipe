// contentscript.js can access contents of current page
console.log("contentscript.js loaded");

var $body = $("body");
var e = $.Event("keyup");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("request = ", request);
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.type == "init"){
  		sendResponse("got init message"); //should see this in background.js console
  		window.initializeWebcamSwiper();
      $body.bind("webcamSwipeLeft", next);
      $body.bind("webcamSwipeRight", previous);
  	}
});

var next = function(){
  console.log("next");
  //window height = window.innerHeight
  e.which = 33;
  $body.trigger(e);
  //$.scrollTo(0, window.pageYOffset + window.innerHeight);

  $body.animate({scrollTop: window.pageYOffset + window.innerHeight}, 'fast');
}

var previous = function(){
  console.log("previous");
  e.which = 34;
  $body.trigger(e);
  $body.animate({scrollTop: window.pageYOffset - window.innerHeight}, 'fast');
};


