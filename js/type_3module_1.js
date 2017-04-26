/**
 * Created by dell on 2017/4/24.
 */
function NewsItemTwo() {
    var str = '<div class="content_item common bgc-9 tmpl_video">'+
        '<a data-attr-data-gid href="javascript:void(0)">'+
        '<div class="content_main borderc-6">'+
        '<div class="info">'+
        '<div data-content-title class="title font2_const color-2">江口沉银遗址出水文物3万余件 专家:世界级考古发现</div>'+
        '<div class="tips font6_const color-4">'+
        '<div data-content-source class="tip">辽宁高清</div>'+
        '</div>'+
        '</div>'+
        '<div data-css-background-image class="img font8_const color_9">'+
        '<div class="play-icon"></div>'+
        '<div data-content-duration class="tip border-9 font8_const color-9">00:24</div>'+
        '</div>'+
        '</div>'+
        '</a>'+
        '</div>';
    this.template = $(str);
    NewsItemTwo.prototype.setData = function (data) {
        for (var key in data) {
            this.template.find("[data-content-" + key + "]").text(data[key]);
            this.template.find("[data-attr-data-"+ key + "]").attr("data-attr-data-" + key, data[key]);
            this.template.find("[data-css-background-" + key + "]").css("background-"+key, "url("+data[key]+")");
        }
    };
}