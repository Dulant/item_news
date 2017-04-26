/**
 * Created by dell on 2017/4/24.
 */
function NewsItemFour() {
    var str = '<div class="content_item bgc-9 m-3 tmpl_video">'+
        '<a data-attr-data-gid href="javascript:void(0)">'+
        '<div class="content_main borderc-6">'+
        '<div data-css-background-image class="pic">'+
        '<div class="bottom">'+
        '<div class="word">'+
        '<div data-content-title class="title-word color-9 font2_const">二年级男孩带警察把妈妈近4万元现金"抢"了</div>'+
        '<div class="tips font6_const color-6">'+
        '<div data-content-source class="tip">24小时</div>'+
        '<div data-content-time class="tip">6小时前</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="play-icon"></div>'+
        '<div data-content-duration class="tip border-9 font8_const color-9">01:42</div>'+
        '</div>'+
        '</div>'+
        '</a>'+
        '</div>';
    this.template = $(str);
}
NewsItemFour.prototype.setData = function (data) {
    for (var key in data) {
        this.template.find("[data-content-" + key + "]").text(data[key]);
        this.template.find("[data-attr-data-"+ key + "]").attr("data-attr-data-" + key, data[key]);
        this.template.find("[data-css-background-" + key + "]").css("background-"+key, "url("+data[key]+")");
    }
};