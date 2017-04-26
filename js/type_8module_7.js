/**
 * Created by dell on 2017/4/24.
 */
function NewsItemSix() {
    var str = '<div class="content-card bgc-6 m-7">'+
        '<div data-content-titleHot class="card-title borderc-6 bgc-9 color-2 font5">聚焦勇士</div>'+
        '<div class="card-list">'+
        '<div class="content_item common bgc-9 tmpl_news">'+
        '<a data-attr-data-gidOne href="javascript:void(0)">'+
        '<div class="content_main borderc-6">'+
        '<div class="info">'+
        '<div data-content-titleOne class="title font2_const color-2">水花58分勇士取得赛点 双枪63分开拓者陷绝境</div>'+
        '<div class="tips font6_const color-4">'+
        '<div data-content-sourceOne class="tip">体育频道综合</div>'+
        '<div data-content-timeOne class="tip">3小时前</div>'+
        '<div data-content-statusOne class="tip" style="color:#FF3644">热点</div>'+
        '</div>'+
        '</div>'+
        '<div data-css-background-imageOne class="img font8_const color_9 imageOne">'+

        '</div>'+
        '</div>'+
        '</a>'+
        '</div>'+
        '<div class="content_item common bgc-9 tmpl_news">'+
        '<a data-attr-data-gidTwo href="javascript:void(0)">'+
        '<div class="content_main borderc-6">'+
        '<div class="info">'+
        '<div data-content-titleTwo class="title font2_const color-2">最无悬念!勇士隔空叫板骑士 靠谱的还是他俩</div>'+
        '<div class="tips font6_const color-4">'+
        '<div data-content-sourceTwo class="tip">米儿体育网</div>'+
        '<div data-content-timeTwo class="tip">3小时前</div>'+
        '<div data-content-statusTwo class="tip" style="color:#FF3644">热点</div>'+
        '</div>'+
        '</div>'+
        '<div data-css-background-imageTwo class="img font8_const color_9 imageTwo">'+
        '</div>'+
        '</div>'+
        '</a>'+
        '</div>'+
        '<div class="content_item common bgc-9 tmpl_news">'+
        '<a data-attr-data-gidThree href="javascript:void(0)">'+
        '<div class="content_main borderc-6">'+
        '<div class="info">'+
        '<div data-content-titleThree class="title font2_const color-2">一些非洲人家庭小孩生的多，一直过得很贫困，经常饿肚子</div>'+
        '<div class="tips font6_const color-4">'+
        '<div data-content-sourceThree class="tip">未来网</div>'+
        '<div data-content-timeThree class="tip">9小时前</div>'+
        '<div data-content-statusThree class="tip" style="color:#FF3644">热点</div>'+
        '</div>'+
        '</div>'+
        '<div data-css-background-imageThree class="img font8_const color-9 imageThree">'+

        '</div>'+
        '</div>'+
        '</a>'+
        '</div>'+
        '</div>'+
        '</div>';
    this.template = $(str);
}
NewsItemSix.prototype.setData = function (data) {
    for (var key in data) {
        
        this.template.find("[data-content-" + key + "]").text(data[key]);
        this.template.find("[data-attr-data-"+ key + "]").attr("data-attr-data-" + key, data[key]);
        this.template.find("[data-css-background-" + key + "]").css("background-image", "url("+data[key]+")");
    }
}