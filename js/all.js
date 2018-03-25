let url = "./previews/index.json";

function callback(responseText) {
    console.log(responseText)
}

function getText(url, callback) {
    
    var request = new XMLHttpRequest();
    
    request.open("GET", url);
    
	request.onreadystatechange = function() {
			callback(request.responseText);
			console.log("request.readystate ： " + request.readystate);
            console.log("request.status ： " + request.status);
            
            let keys = Object.keys(request);
            console.log("request keys： " + JSON.stringify(keys) ) ;
            
            let obj = {}
            for (let i = 0, len = keys.length; i < len; i++) {
                let key = keys[i]
                obj[key] = request[key]
            }
            console.log("request : " + JSON.stringify(obj) ) ;

        
	}; 

    request.send(null);
}

getText(url,callback)