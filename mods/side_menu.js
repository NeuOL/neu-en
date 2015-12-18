var sideMenuList = $('.sidebar-content ul');

// fix
//var host = 'http://202.118.1.138';
 var host = 'http://localhost/neu-en';
var items = {
    news: [
        {name: "News & Events", href: [ host + "/news.html", host + "/news.html#", host + "/detail.html?news" ]},
        {name: "Media", href: [ host + "/media.html", host + "/media.html#", host + "/detail.html?media" ]},
        {name: "International Conferences", href: [ host + "/international.html", host + "/international.html#", host + "/detail.html?international" ]}
    ],
    about: [
        {name: 'General Information', href: [host + "/aboutNEU.html"]},
        {name: 'Academicians', href: [  host + "/aList.html", host + "/WenBangchun.html",
                                        host + "/ZhangSiying.html", host + "/LuZhongwu.html",
                                        host + "/ChaiTianyou.html", host + "/WangGuodong.html",
                                        host + "/School_Lesson_song.html"]},
        {name: 'Campus Pictures', href: [ "http://90.neu.edu.cn/plus/list.php?tid=33"]},
        {name: 'University Badge,Motto&Anthem', href: [host + "/School_Lesson_song.html"]},
        {name: 'Campus Map', href: ["http://office.neu.edu.cn/wp-content/uploads/2012/03/%E4%B8%9C%E5%8C%97%E5%A4%A7%E5%AD%A6%E5%B9%B3%E9%9D%A2%E5%9B%BE0.jpg"]}
    ],
    college: [
        {name: '(East campus) General School', href: [ host + "/GS.html" ]},
        {name: 'School of Humanities and Law', href: [ host + "/HAL.html" ]},
        {name: 'Foreign Studies College (FSC)', href: [ host + "/fsc.html" ]},
        {name: 'College of Arts', href: [ host + "/art.html" ]},
        {name: 'School of Business Administration (SBA)', href: [ host + "/SBA.html" ]},
        {name: 'The College of Sciences', href: [ host + "/S.html" ]},
        {name: 'College of Resources and Civil Engineering', href: [ host + "/RCE.html" ]},
        {name: 'School of Materials and Metallurgy', href: [ host + "/MM.html" ]},
        {name: 'School of Mechanical Engineering and Automation', href: [ host + "/MEA.html" ]},
        {name: 'College of Information Science and Engineering', href: [ host + "/ISE.html" ]},
        {name: 'Software College', href: [ host + "/SC.html" ]},
        {name: 'Sino-Dutch Biomedical and Information Engineering School', href: [ host + "/PSBAIES.html" ]},
        {name: 'The College of National Defense Education', href: [ host + "/NDE.html" ]},
        {name: 'The Physical Education Department', href: [ host + "/PED.html" ]},
        {name: 'School of International Exchange', href: [ host + "/IE.html" ]}
    ],
    alumni:[
        {name: 'Northeastern University Alumni Association', href:[host + "/Alumni_Association.html"]},
        {name: 'H. L. Chang Education Foundation', href:[host + "/foundation.html"]}
    ],
    talentsrecruitment:[
        {name: '1000-Talents Plan', href:[host + "/1000_Talents_Plan.html"]},
        {name: 'Overseas 100-Talents Plan', href:[host + "/100_Talents_Plan.html"]},
        {name: 'Double-100 Plan', href:[host + "/Double-100_Plan.html"]},
        {name: 'Other Talents', href:[host + "/OtherTalents.html"]}
    ],
    exchange:[
        {name: 'Long-term Students Exchange Program', href:[host + "/Students-Exchange.html"]},
        {name: 'Cooperation and exchanges', href:[host + "/Exchange-Cooperation.html"]},
        {name: 'Study in NEU', href:["http://www.sie.neu.edu.cn/en/index.asp"]}
    ],
    subject_reseach:[
        {name: 'Disciplinary Introduction', href:[host + "/Disciplinary-introduction.html"]},
        {name: 'Key Construction', href:[host + "/key_construction.html"]},
        {name: 'National Key Discipline', href:[host + "/National-Key-Discipline.html"]},
        {name: 'Provincial Key Discipline', href:[host + "/Provincial-Key-Discipline.html"]},
        {name: 'Doctoral Degree Authorization Discipline', href:[host + "/Doctoral-Degree.html"]},
        {name: 'Master Degree Authorization Discipline', href:[host + "/Master-Degree.html"]},
        {name: 'The Development of Scientific Research', href:[host + "/scientific_research.html"]},
        {name: 'National Awards for Science and Technology', href:[host + "/research_outcomes.html"]},
        {name: 'Key Laboratory', href:[host + "/KList.html",
                                       host + "/key1.html",
                                       host + "/key2.html",
                                       host + "/key3.html",
                                       host + "/key4.html",
                                       host + "/key5.html",
                                       host + "/key6.html"
                                       ]
        },
        {name: 'Research Center', href:[host + "/rList.html",
                                        host + "/center1.html",
                                        host + "/center2.html",
                                        host + "/center3.html",
                                        host + "/center4.html",
                                        host + "/center5.html",
                                        host + "/center6.html"
        ]}
    ]
}

// fix
var href = window.location.href;
var curItem = null;
var curIdx = -1;

function findActive(cb) {
    for (var item in items) {
        if (items.hasOwnProperty(item)) {
            for(var i = 0; i < items[item].length; i++) {
                if (items[item][i]) {
                    for(var j = 0; j < items[item][i]['href'].length; j++) {
                        if ( href.indexOf(items[item][i]['href'][j]) >= 0 ) {
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
            dom += '<li><a class="active" href="'+ curItem[i].href[0] +'" title="' + curItem[i].name + '">'+curItem[i].name+'</a></li>';
        } else {
            dom += '<li><a href="'+ curItem[i].href[0] +'" title="' + curItem[i].name + '">'+curItem[i].name+'</a></li>';
        }
    }
    sideMenuList.html(dom);
}

findActive(genDom);

$("#top-banner img").on('click', function() {
    window.location.href = host;
});
