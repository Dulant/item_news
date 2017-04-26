/**
 * Created by dell on 2017/4/24.
 */
function NewsItemFive() {
    var str = '<div class="content_item news_mulpic bgc-9 tmpl_news">'+
        "<a data-attr-data-gid href='javascript:void(0)'>"+
        '<div class="content_main borderc-6">'+
        '<div data-content-title class="title font2_const color-2">婊女都什么样的特征?中三条铁定无疑就是!</div>'+
        '<div class="img_list">'+
        '<div data-css-background-imageOne class="item imageOne"></div>'+
        '<div data-css-background-imageTwo class="item imageTwo"></div>'+
        '<div data-css-background-imageThree class="item imageThree"></div>'+
        '</div>'+

        '</div>'+
        '</a>'+
        '</div>';
    this.template = $(str);
}
    NewsItemFive.prototype.setData = function (data) {
        for(var key in data){
            this.template.find("[data-content-" + key + "]").text(data[key]);
            this.template.find("[data-attr-data-"+ key + "]").attr("data-attr-data-" + key, data[key]);
            this.template.find("[data-css-background-" + key + "]").css("background-image", "url("+data[key]+")");
        }
    };