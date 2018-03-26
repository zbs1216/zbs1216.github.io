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

    function Preview(arg /* {"info":{obj}, "selfID": {string},  "tepmlate":{node},}*/) {
        this.node = arg.tepmlate.cloneNode(true);

        this.selfID = selfID

        this.articlePath = info.path
        this.typePath = info.typePath

        this.title = info.title;
        this.type = info.type;
        this.birthtime = info.birthtime;
        this.preview = info.firstnode; 
        this.wordCount = this.wordCount;
        this.render();
    }

    Preview.prototype.config = function () {
        let setInnerHTML = {
            "title"         : ".title-content",
            "type"          : ".type",
            "birthtime"     : ".birthtime",
            "preview"       : ".preview",
            "wordCount"     : ".word-count",
        }

        let setHref = {
            "articlePath"   : ".article-path",
            "typePath"      : ".type-path",
        }

        let config = {
            "setInnerHTML": setInnerHTML,
            "setHref": setHref,
        }

        return config
    }

    Preview.prototype.render = function() {
        let self = this
        let node = this.node
        let config = this.config()

        node.id = this.selfID

        render(config.setInnerHTML, setInnerHTML)
        render(config.setHref, setHref)

        function render(config, callback) {
            for (i in config) {
                if ( config.hasOwnProperty(i) ) {
                    let current = node.querySelectorAll( config[i] );
                    [].forEach.call(current, function(item){
                        callback(item, i)
                    })
                }
            }
        }

        function setInnerHTML(item, key) {
            item.innerHTML = self[i]
        }

        function setHref(item, key) {
            item.setAttribute("href", self[key])
        }

    }

    // function PreviewNav (arg /* {"list":{string}, "target":{node} or {string}, "selfID": {string}, "maxNum":{num},}*/) {
    //     list = JSON.parse(arg.list)

    //     this.items = list;
    //     this.itemsLen = list.length;

    //     this.target = $(arg.target);
    //     this.selfID = arg.selfID; 
    //     this.maxNum = arg.maxNum;

    //     this.exceedMaxNum = itemsLen > maxNum;
    //     this.navLen = exceedMaxNum ? maxNum : itemsLen; 
    // }

    // PreviewNav.prototype.createNav = function() {
    //     let items = this.items
    //     let itemsLen = this.itemsLen;
    //     let maxNum = this.maxNum;
    //     let exceedMaxNum = this.exceedMaxNum;
    //     let navLen = this.navLen ;
    //     let selfID = this.selfID
    //     let target = this.target

    //     // 生成分页导航列表
    //     // 生成 navlen 个 <li>
    //     let li = "";
    //     for(let i = 0; i < navLen; i++) {
    //         li += "<li><button data-preview=" + i  + ">" + (i + 1)+ "</button>"
    //     }
    //     // <li> 添加到 <ul>
    //     let ul = document.createElement("ul");
    //     ul.innerHTML = li;
    //     ul.id = selfID;
    //     // <ul> 添加到 target(目标容器)的末尾
    //     target.append(ul)

    //     // 添加点击事件处理函数
    //     ul.addEventListener("click",handler,false);

    //     function handler(event) {
    //         let target = event.target;
    //         let pro = target.dataset.preview;
    //         let url = items[pro];

    //         getText(url, renderPreview);
    //     }

    //     function renderPreview(responseText){

    //     }
    // }

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

