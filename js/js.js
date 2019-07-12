$(document).ready(function(){
    // 锚点平滑滚动
    $("a[href*='#'],area[href*='#']").click(function () {
        console.log(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });

    var point = $(".point-7");
    var top1 = point.position().top + point.width()/2;
    var left1 = point.position().left + point.width()/2;
    var point = $(".point-3");
    var top2 = point.position().top + point.width()/2;
    var left2 = point.position().left + point.width()/2;
    width = Math.sqrt(Math.pow(top1-top2, 2) + Math.pow(left1-left2, 2));
    tan = (top2-top1) / (left2 - left1);
    angle = Math.round( Math.atan(tan) / (Math.PI / 180) );
    console.log(angle);
});