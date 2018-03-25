
let url = "./previews/index.json";

function callback(responseText) {
    console.log(responseText)
}

function getText(url, callback) {
    
    var request = new XMLHttpRequest();
    
    request.open("GET", url);
    
	request.onreadystatechange = function() {
        callback(request.responseText);
	}; 

    request.send(null);
}

getText(url,callback)