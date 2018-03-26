(function(){
    const url = "./previews/index.json";
    const wraperID = "indexPage"
    const previewTemplateID = "container";

    function start() {
        getText(url,init)
    }

    function init(responseText) {
        console.log(responseText)
        
        let continer = $(wraperID)
        // let previewTemplate = $(previewTemplateID)
        let previewTemplate = document.getElementById(previewTemplateID)     

        console.log(previewTemplate)

        let list = JSON.parse(responseText)
        let previews

        console.log(list[0])


        getText(list[0],function(responseText){
            let infoList = JSON.parse(responseText)
            console.log(infoList)

        })
    }


    function $(target) {
        let node = null;

        if (typeof target === "string") {
            node = document.getElementById(target)
        } 
        else if(typeof target === "object"){
            node = target
        } else {
            throw new Error("$(target) 出错 ： target 参数必须为字符串，或者 DOM 节点");
        }

        return node;
    }

    function getText(url, callback) {
        
        var request = new XMLHttpRequest();
        
        request.open("GET", url);
        
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.responseText);
            }
        }; 
    
        request.send(null);
    }

    start();
})()

