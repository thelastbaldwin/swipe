chrome.browserAction.setIcon({path: "Hand.png"},function(){
});

chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.getSelected(null, function(tab) {

		//test message
		// chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
		// 	console.log(response);
		// });

		//tell the content script to fire
		chrome.tabs.sendMessage(tab.id, {type: "init"}, function(response) {
			if(response){
				//keep for debugging ease
				console.log(response);
			}
		});
	});
});