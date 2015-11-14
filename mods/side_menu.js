var sideMenuList = $('.sidebar-content ul');

// fix
var host = 'http://localhost/neu-en';
var items = {
    about: [
        {name: 'General Information', href: [host + "/aboutNEU/aboutNEU.html"]},
        {name: 'Academicians', href: [host + "/aboutNEU/aList.html", host + "/aboutNEU/WenBangchun.html",
                                        host + "/aboutNEU/ZhangSiying.html"]},
    ]
}

// fix
var href = window.location.href;
var curItem = null;
var curIdx = -1;

function findActive(cb) {
    for (var item in items) {
        if (items.hasOwnProperty(item)) {
            for(var i = 0; i < item.length; i++) {
                if (items[item][i]) {
                    for(var j = 0; j < items[item][i]['href'].length; j++) {
                        if (items[item][i]['href'][j] === href) {
                            curItem = items[item]
                            curIdx = i;
                        }
                    }
                }
            }
        }
    }
    cb()
}

function genDom() {
    var dom = "";
    for(var i = 0; i < curItem.length; i++) {
        if ( curIdx === i ) {
            dom += '<li><a class="active" href="'+ curItem[i].href[0] +'">'+curItem[i].name+'</a></li>';
        } else {
            dom += '<li><a href="'+ curItem[i].href[0] +'">'+curItem[i].name+'</a></li>';
        }
    }
    sideMenuList.html(dom);
}

findActive(genDom);
