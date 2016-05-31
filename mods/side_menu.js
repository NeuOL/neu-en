var sideMenuList = $('.sidebar-content ul');
// fix
var host = 'http://english.neu.edu.cn';
var items = {
    news: [
        {name: "News & Events", href: [ host + "/news.html", host + "/news.html#", host + "/detail.html?news" ]},
        {name: "Media", href: [ host + "/media.html", host + "/media.html#", host + "/detail.html?media" ]},
        {name: "Research", href: [ host + "/international.html", host + "/international.html#", host + "/detail.html?international" ]}
    ],
    about: [
        {name: 'General Information', href: [host + "/aboutNEU.html"]},
        {name: 'Academicians', href: [  host + "/aList.html", host + "/WenBangchun.html",
                                        host + "/ZhangSiying.html", host + "/LuZhongwu.html",
                                        host + "/ChaiTianyou.html", host + "/WangGuodong.html",
                                        host + "/School_Lesson_song.html"]},
        // {name: 'Campus Pictures', href: [ "http://90.neu.edu.cn/plus/list.php?tid=33"]},
        {name: 'University Badge,Motto&Anthem', href: [host + "/School_Lesson_song.html"]},
        {name: 'Campus Map', href: ["http://office.neu.edu.cn/wp-content/uploads/2012/03/%E4%B8%9C%E5%8C%97%E5%A4%A7%E5%AD%A6%E5%B9%B3%E9%9D%A2%E5%9B%BE0.jpg"]}
    ],
    college: [
        {name: '(East campus) General School', href: [ host + "/GS.html" ]},
        {name: 'School of Humanities and Law', href: [ host + "/HAL.html" ]},
        {name: 'Foreign Studies College', href: [ host + "/fsc.html" ]},
        {name: 'College of Arts', href: [ host + "/art.html" ]},
        {name: 'School of Business Administration', href: [ host + "/SBA.html" ]},
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
        {name: 'External Liaison and Cooperation Department', href:[host + "/External_Liaison&Cooperation_Department.html"]},
        {name: 'Alumni Association', href:[host + "/Alumni_Association.html"]},
        {name: 'Board Of Trustees', href:[host + "/Board_of_Trustees.html"]},
        {name: 'H. L. Chang Education Foundation', href:[host + "/foundation.html"]}
        
    ],
    talentsrecruitment:[
        {name: 'Thousand Talents Plan', href:[host + "/1000_Talents_Plan.html"]},
        {name: 'The Yangtze River Scholar Program', href:[host + "/Yangtze_Program.html"]},
        {name: 'The National Science Fund for Distinguished Young Scholars', href:[host + "/Young_Scholars.html"]},
        {name: 'Ten Thousand Talents Project', href:[host + "/10000_Talents_Plan.html"]},
        {name: 'Thousand Young Talents Plan', href:[host + "/1000_Young_Plan.html"]},
        {name: 'Young Scholars of "The Yangtze River Scholar Program"', href:[host + "/Young_Yangtze_Program.html"]},
        {name: 'The National Postdoctoral International Exchange Program', href:[host + "/Exchange_Program.html"]},
        {name: 'Double Hundred Plan', href:[host + "/Double_100_Plan.html"]}
    ],
    exchange:[
        {name: 'Long-term Students Exchange Program', href:[host + "/Students-Exchange.html"]},
        {name: 'Cooperation and exchanges', href:[host + "/Exchange-Cooperation.html"]},
        {name: 'Study in NEU', href:["http://www.sie.neu.edu.cn/en/index.asp"]}
    ],
    subject_reseach:[
        {name: 'Key Disciplines', href:["http://xkjs.neu.edu.cn/english/EnAction_toTypePage?typeId=10"]},
        {name: 'Degree Programs', href:["http://xkjs.neu.edu.cn/english/EnAction_toTypePage?typeId=11"]},
        {name: 'Academicians of NEU', href:["http://xkjs.neu.edu.cn/english/EnAction_toTypePage?typeId=12"]},
        {name: 'Key Construction', href:["http://xkjs.neu.edu.cn/english/EnAction_toTypePage?typeId=13"]},
        {name: 'The Development of Scientific Research', href:[host + "/scientific_research.html"]},
        {name: 'Scientific Research Base', href:[host + "/research_base.html"]},
        {name: 'Achievements in Scientific Research', href:[host + "/research_outcomes.html"]},
        {name: 'Key Laboratory', href:[host + "/KList.html",
                                       host + "/key1.html",
                                       host + "/key2.html",
                                       host + "/key3.html",
                                       host + "/key4.html",
                                       host + "/key5.html",
                                       host + "/key6.html",
                                       host + "/key7.html",
                                       host + "/key8.html",
                                       host + "/key9.html",
                                       host + "/key10.html",
                                       host + "/key11.html",
                                       host + "/key12.html",
                                       host + "/key13.html",
                                       host + "/key14.html",
                                       host + "/key15.html",
                                       host + "/key16.html",
                                       host + "/key17.html"

                                       ]
        },
        {name: 'Research Center', href:[host + "/rList.html",
                                        host + "/center1.html",
                                        host + "/center2.html",
                                        host + "/center3.html",
                                        host + "/center4.html",
                                        host + "/center5.html",
                                        host + "/center6.html",
                                        host + "/center7.html",
                                        host + "/center8.html",
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
