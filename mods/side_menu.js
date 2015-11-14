var sideMenuList = $('.sidebar-content ul');

// fix
var host = 'http://localhost/neu-en';
var items = {
    about: [
        {name: 'General Information', href: [host + "/aboutNEU/aboutNEU.html"]},
        {name: 'Academicians', href: [  host + "/aboutNEU/aList.html", host + "/aboutNEU/WenBangchun.html",
                                        host + "/aboutNEU/ZhangSiying.html", host + "/aboutNEU/LuZhongwu.html",
                                        host + "/aboutNEU/ChaiTianyou.html", host + "/aboutNEU/WangGuodong.html",
                                        host + "/aboutNEU/School_Lesson_song.html"]},
        {name: 'Campus Pictures', href: [ "http://90.neu.edu.cn/plus/list.php?tid=33"]},
        {name: 'University Badge,Motto&Anthem', href: [host + "/aboutNEU/School_Lesson_song.html"]}
    ],
    college: [
        {name: '(East campus) General School', href: [ host + "/college/GS.html" ]},
        {name: 'School of Humanities and Law', href: [ host + "/college/HAL.html" ]},
        {name: 'Foreign Studies College (FSC)', href: [ host + "/college/fsc.html" ]},
        {name: 'SCollege of Arts', href: [ host + "/college/art.html" ]},
        {name: 'School of Business Administration (SBA)', href: [ host + "/college/SBA.html" ]},
        {name: 'The College of Sciences', href: [ host + "/college/S.html" ]},
        {name: 'College of Resources and Civil Engineering', href: [ host + "/college/RCE.html" ]},
        {name: 'School of Materials and Metallurgy', href: [ host + "/college/MM.html" ]},
        {name: 'School of Mechanical Engineering and Automation', href: [ host + "/college/MEA.html" ]},
        {name: 'College of Information Science and Engineering', href: [ host + "/college/ISE.html" ]},
        {name: 'Software College', href: [ host + "/college/SC.html" ]},
        {name: 'Sino-Dutch Biomedical and Information Engineering School', href: [ host + "/college/PSBAIES.html" ]},
        {name: 'The College of National Defense Education', href: [ host + "/college/NDE.html" ]},
        {name: 'The Physical Education Department', href: [ host + "/college/PED.html" ]},
        {name: 'School of International Exchange', href: [ host + "/college/IE.html" ]}
    ],
    alumni:[
        {name: 'Northeastern University Alumni Association', href:[host + "/The_Alumni_Association/Alumni_Association.html"]},
        {name: 'H. L. Chang Education Foundation', href:[host + "/The_Alumni_Association/Alumni_Association.html"]}
    ],
    talentsrecruitment:[
        {name: '1000-Talents Plan', href:[host + "/talents_recruitment/1000_Talents_Plan.html"]},
        {name: 'Overseas 100-Talents Plan', href:[host + "/talents_recruitment/100_Talents_Plan.html"]},
        {name: 'Double-100 Plan', href:[host + "/talents_recruitment/Double-100_Plan.html"]},
        {name: 'Other Talents', href:[host + "/talents_recruitment/OtherTalents.html"]}
    ],
    exchange:[
        {name: 'Long-term Students Exchange Program', href:[host + "/exchange/Students-Exchange.html"]},
        {name: 'Cooperation and exchanges', href:[host + "/exchange/Exchange-Cooperation.html"]},
        {name: 'Study in NEU', href:["http://www.sie.neu.edu.cn/en/index.asp"]}
    ],
    subject_reseach:[
        {name: 'Disciplinary Introduction', href:[host + "/subject_reseach/Disciplinary-introduction.html"]},
        {name: 'Key Construction', href:[host + "/subject_reseach/key_construction.html"]},
        {name: 'National Key Discipline', href:[host + "/subject_reseach/National-Key-Discipline.html"]},
        {name: 'Provincial Key Discipline', href:[host + "/subject_reseach/Provincial-Key-Discipline.html"]},
        {name: 'Doctoral Degree Authorization Discipline', href:[host + "/subject_reseach/Doctoral-Degree.html"]},
        {name: 'Master Degree Authorization Discipline', href:[host + "/subject_reseach/Master-Degree.html"]},
        {name: 'The Development of Scientific Research', href:[host + "/subject_reseach/scientific_research.html"]},
        {name: 'National Awards for Science and Technology', href:[host + "/subject_reseach/research_outcomes.html"]},
        {name: 'Key Laboratory', href:[host + "/key_laboratory/KList.html",
                                       host + "/key_laboratory/key1.html",
                                       host + "/key_laboratory/key2.html",
                                       host + "/key_laboratory/key3.html",
                                       host + "/key_laboratory/key4.html",
                                       host + "/key_laboratory/key5.html",
                                       host + "/key_laboratory/key6.html"
                                       ]
        },
        {name: 'Research Center', href:[host + "/research_center/rList.html",
                                        host + "/research_center/center1.html",
                                        host + "/research_center/center2.html",
                                        host + "/research_center/center3.html",
                                        host + "/research_center/center4.html",
                                        host + "/research_center/center5.html",
                                        host + "/research_center/center6.html"
        ]}
    ]
}

// fix
var href = window.location.href;
var curItem = null;
var curIdx = -1;

function findActive(cb) {
    console.log(items)
    for (var item in items) {
        if (items.hasOwnProperty(item)) {
            for(var i = 0; i < items[item].length; i++) {
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
            dom += '<li><a class="active" href="'+ curItem[i].href[0] +'" title="' + curItem[i].name + '">'+curItem[i].name+'</a></li>';
        } else {
            dom += '<li><a href="'+ curItem[i].href[0] +'" title="' + curItem[i].name + '">'+curItem[i].name+'</a></li>';
        }
    }
    sideMenuList.html(dom);
}

findActive(genDom);
