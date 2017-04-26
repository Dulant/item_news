/**
 * Created by dell on 2017/4/24.
 */
function NewsItemOne() {
    var str = "<div class='content_item common bgc-9 tmpl_news'>"+
        "<a data-attr-data-gid href='javascript:void(0)'>"+
        "<div class='content_main borderc-6'>"+
        "<div class='info'>"+
        "<div data-content-title class='title font2_const color-2'>一些非洲人家庭小孩生的多，一直过得很贫困，经常饿肚子</div>"+
        "<div class='tips font6_const color-4'>"+
        "<div data-content-source class='tip'>未来网</div>"+
        "<div data-content-time class='tip'>9小时前</div>"+
        "</div>"+
        "</div>"+
        "<div data-css-background-image class='img font8_const color_9'>"+
        "</div>"+
        "</div>"+
        "</a>"+
        "</div>";
    this.template = $(str);
}
NewsItemOne.prototype.setData = function (data) {
    for (var key in data) {
        this.template.find("[data-content-" + key + "]").text(data[key]);
        this.template.find("[data-attr-data-"+ key + "]").attr("data-attr-data-" + key, data[key]);
        this.template.find("[data-css-background-" + key + "]").css("background-"+key, "url("+data[key]+")");
    }
};