let url = "./previews/index.json";

function callback(responseText) {
    console.log(responseText)
}

function getText(url, callback) {
    
    var request = new XMLHttpRequest();
    
    request.open("GET", url);
    
	request.onreadystatechange = function() {
			callback(request.responseText);
			console.log("request.readystate ： " + request.readystate;)
			console.log("request.status ： " + request.status;)
        
	}; 

    request.send(null);
}

getText(url,callback)