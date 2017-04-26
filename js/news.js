/**
 * Created by dell on 2017/4/23.
 */

(function ($) {
    // 把毫秒转化为时间
    function now(pate) {
        // console.log(pate);
        var oldTime = pate;
        var newTime = parseInt(new Date().getTime()/1000);
        var intervalTime = newTime - oldTime;
        if(intervalTime>0&&intervalTime<3600000){
            var minutes = Math.ceil((intervalTime/60)%60)+"分钟前";
            return minutes.toString();
        }else if(intervalTime>=3600000&&intervalTime<86400000){
            var hour= Math.floor((intervalTime/3600)%24)+"小时前";
            return hour.toString();
        }else if(intervalTime>=86400000){
            var day = Math.floor(intervalTime/3600/24)+"天前";
            return day.toString();
        }
    }
    $.ajax({
        // 向豆瓣请求数据
        url: "http://api.app.btime.com/channel/getchannel",
        success:function (data) {
            $(data.data.channel[0].list).each(function (i,e) {
                var $a = $("<a></a>")
                // 给a链接添加一个属性和值，点击当前的a可以获取到对应的cid，跳转到对应的页面
                    .attr("data-cid",data.data.channel[0].list[i].cid)
                    .css("cursor", "pointer")
                    .html(data.data.channel[0].list[i].cname);
                var $li = $("<li></li>").append($a);
                $(".nav-list").append($li);
            });
            // 点击导航，进入内容页面
                $("#nav-wrapper .nav-list li").click(function () {
                    $(".spinner").css("display","block");
                    $(".content").html("");
                    content("http://h5.btime.com/index/list?cname=推荐&offset=0&refresh_type=1&refresh=1&count=12&_="+Date.now()+"&"+"cid=",$(this).children("a").attr("data-cid"));

                });
                function content(url,cid){
                    $.ajax({
                        type:"get",
                        url:url+cid,
                        dataType : "jsonp",
                        callback:"callback",
                        jsonpCallback:"jsonp1",
                        success : function (data) {

                            $(".spinner").css("display","none");
                            $(data.data).each(function (i,e) {

                        //    console.log(e.type+"---"+e.module);

                                if(e.type == 1 && e.module == 1 || e.type == 6 && e.module==1){

                                    var type1_module_1 = new NewsItemOne();
                                    type1_module_1.setData({title:e.data.title,source:e.data.source,time:now(e.data.pdate),gid:e.gid,image:e.data.covers[0]});
                                    $(".content").append(type1_module_1.template);
                                } else if(e.type == 3 && e.module == 1){

                                    var type3_module_1 = new NewsItemTwo();
                                    type3_module_1.setData({title:e.data.title,source:e.data.source,duration:e.data.duration,time:now(e.data.pdate),gid:e.gid,image:e.data.covers[0]});
                                    $(".content").append(type3_module_1.template);

                                }else if(e.type == 1 && e.module == 2){

                                    var type1_module_2 = new NewItemThree();
                                    type1_module_2.setData({title:e.data.title,source:e.data.source,time:now(e.data.pdate),gid:e.gid});
                                    $(".content").append(type1_module_2.template);
                                }else if(e.type == 3 && e.module == 3){

                                    var type3_module_3 = new NewsItemFour();
                                    type3_module_3.setData({title:e.data.title,source:e.data.source,time:now(e.data.pdate),duration:e.data.duration,gid:e.gid,image:e.data.covers[0]});
                                    $(".content").append(type3_module_3.template);
                                }else if(e.type == 1 && e.module == 5){

                                    var type1_module_5 = new NewsItemFive();
                                    type1_module_5.setData({title:e.data.title,gid:e.gid,imageOne:e.data.covers[0],imageTwo:e.data.covers[1],imageThree:e.data.covers[2]});
                                    $(".content").append(type1_module_5.template);
                                }else if(e.type == 8 && e.module == 7){

                                    var type8_module_7 = new NewsItemSix();
                                    type8_module_7.setData({
                                        titleHot:e.data.title,titleOne:e.data.news[0].data.title,sourceOne:e.data.news[0].data.source,timeOne:e.data.news[0].data.pdate,statusOne:e.data.news[0].data.tag[0].name,gidOne:e.data.news[0].gid,imageOne:e.data.news[0].data.covers[0],
                                        titleTwo:e.data.news[1].data.title,sourceTwo:e.data.news[1].data.source,timeTwo:e.data.news[1].data.pdate,statusTwo:e.data.news[0].data.tag[0].name,gidTwo:e.data.news[1].gid,imageTwo:e.data.news[1].data.covers[0],
                                        titleThree:e.data.news[2].data.title,sourceThree:e.data.news[2].data.source,timeThree:e.data.news[2].data.pdate,statusThree:e.data.news[0].data.tag[0].name,gidThree:e.data.news[2].gid,imageThree:e.data.news[2].data.covers[0]
                                    });
                                    $(".content").append(type8_module_7.template);
                                }
                            });
                            // 点击内容页面进入详情页面
                            $(".xs-container .content_item").click(function () {
                                $(".spinner").css("display","block");
                                details($(this).children("a").attr("data-attr-data-gid"));
                                $(".item-news").css("display","none");
                                $('.xs-container').css({"display":"none","margin-top":0});


                            });
                            function details(gid) {
                                $.ajax({
                                    type: "get",
                                    url:"http://api.btime.com/trans?&fmt=json&token=1ffeeeb68d0daf22c3af3a957dba5b7c&push_id=500768a6d20128256b3282c6ea4548c9&timestamp=1491984423&channel=ali&sign=c14b395&gid="+gid,
                                    dataType : "jsonp",
                                    jsonp: "callback",
                                    jsonpCallback:"jsonp2",
                                    success:function (data) {
                                        console.log("true");
                                        $(".spinner").css("display","none");

                                        function NewsArticle() {
                                            var str = '<div class="article">'+
                                                '<div class="back"><p>返回</p></div>'+
                                                 '<h1 data-content-title>梅西连过5人神球10周年纪念!复制马拉多纳神迹</h1>'+
                                            '<div class="article-info">'+
                                                '<span data-content-source>北京时间体育</span>'+
                                                '<time data-content-time>2017-04-18 08:13:26</time>'+
                                            '</div>'+
                                            '<div data-content-summary class="summary">对于梅西来说,今天,2017年4月18日,是个非常具有纪念意义的日子,因为在10年前的今天,梅西打进了那粒让全世界都为之倾倒的"马拉多纳式"进球。</div>'+
                                            '<div class="art-content">'+
                                                /*'<div data-content-txt class="art-txt">梅西先是过掉帕雷德斯，穿了纳乔的裆，又过掉纳乔，然后从阿莱克西斯和贝伦格尔的双人防守中突围，最后又过掉出击的门将路易斯·加西亚，并倒地打门得手，将当时场上的比赛改写为2-0。整个进球过程，梅西奔袭了55米，只用了12秒的时间。这粒进球的画面立马如病毒般传遍了全世界，绝大多数媒体都提到了另外一个阿根廷人的名字马拉多纳，在1986年世界杯，老马也打进过一个几乎一模一样的进球。梅西传奇的职业生涯也由此正式拉开了序幕!</div>'+
                                                '<div data-content-img class="art-img"></div>'+*/
                                            '</div>'+
                                            '</div>';
                                            this.template = $(str);
                                           
                                        }

                                        NewsArticle.prototype.setData = function (data) {
                                            for (var key in data) {
                                                this.template.find("[data-content-" + key + "]").text(data[key]);
                                            }

                                        };

                                        var acticleModule = new NewsArticle();
                                        acticleModule.setData({title:data.data.title,source:data.data.source,time:now(data.data.time),summary:data.data.summary});
                                        $('.main').append(acticleModule.template);
                                        $(data.data.content).each(function (i,e) {

                                            if(e.type==="txt"){
                                                var $art_txt = $("<div></div>").addClass("art-txt").html(e.value);
                                               $(".art-content").append($art_txt);
                                            }else if(e.type==="img"){
                                                var $art_img = $("<div></div>").addClass("art-img").css("background","url("+e.value+")");
                                                $(".art-content").append($art_img);
                                            }
                                        });
                                        $('.back p').click(function () {
                                            $('.article').children().not('.back').remove();
                                            $(".item-news").css("display","block");
                                            $('.xs-container').css({"display":"block","margin-top":40});
                                            $(this).css("display","none");
                                        })

                                    },
                                    error:function () {
                                        $(".spinner").css("display","none");
                                        console.log("false");
                                        // $(".spinner").children.remove();
                                        $(".main").css({"margin":"300px auto","text-align": "center"});
                                        $(".main").html("网络异常，请检查网络后重试")
                                    }
                                })
                            }

                        },
                        error:function () {
                            $(".spinner").css("display","none");
                            console.log("false");
                            // $(".spinner").children.remove();
                            $(".main").css({"margin":"300px auto","text-align": "center"});
                            $(".main").html("网络异常，请检查网络后重试")
                        }

                    });
                }
                content("http://h5.btime.com/index/list?cname=推荐&offset=0&refresh_type=1&refresh=1&count=12&_="+Date.now()+"&"+"cid=","2da8f707e9d514c562162540d2b0ad57");
                //content("http://h5.btime.com/index/list?cname=推荐&&offset=0&refresh_type=2&refresh=2&count=12&_="+Date.now()+"&"+"cid=","2da8f707e9d514c562162540d2b0ad57");
            $(window).scroll(function(event){
                var $this =$(this);
                var viewH =$(this).height();//可见高度
                var contentH =$(document.body).height();//内容高度
                var scrollTop =$(this).scrollTop();//滚动高度
                /*console.log(viewH);
                console.log(contentH);
                console.log(scrollTop);*/
                if(scrollTop/(contentH -viewH)>=1){ //到达底部100px时,加载新内容
                    // 这里加载数据..
                    setTimeout(function(){
                        content("http://h5.btime.com/index/list?cname=推荐&&offset=0&refresh_type=2&refresh=2&count=12&_="+Date.now()+"&"+"cid=","2da8f707e9d514c562162540d2b0ad57");
                        console.log(11111)
                    },0.00000000000001)

                }

            });
        },
        error:function () {
           // console.log("false");
           // $(".spinner").children.remove();
            $(".main").css({"margin":"300px auto","text-align": "center"});
            $(".main").html("网络异常，请检查网络后重试")
        }
    });

   /* $(window).scroll( function(event){
       // console.log($(window).scrollTop());
        console.log($("body").offsetHeight)

    } );*/


    /*scrollBottomTest =function(){
        $("#contain").scroll(function(){
            var $this =$(this),
                viewH =$(this).height(),//可见高度
                contentH =$(this).get(0).scrollHeight,//内容高度
                scrollTop =$(this).scrollTop();//滚动高度
            //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
            if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
                // 这里加载数据..
            }
        });
    }*/

})($);
