// 连线函数
function linelink(point_one, point_two, line) {
  var point = $("." + point_one);
  var top1 = point.position().top + point.width() / 2;
  var left1 = point.position().left + point.width() / 2;
  var point = $("." + point_two);
  var top2 = point.position().top + point.width() / 2;
  var left2 = point.position().left + point.width() / 2;
  width = Math.sqrt(Math.pow(top1 - top2, 2) + Math.pow(left1 - left2, 2));
  tan = (top2 - top1) / (left2 - left1);
  angle = Math.round(Math.atan(tan) / (Math.PI / 180));
  if (left2 < left1) {
    angle += 180;
  }
  $('.' + line).css("width", width);
  $('.' + line).css("top", top1);
  $('.' + line).css("left", left1);
  $('.' + line).css("transform", "rotate(" + angle + "deg)");
}

function allline() {
  linelink("point-1", "point-2", "line-1");
  linelink("point-1", "point-7", "line-2");
  linelink("point-1", "point-6", "line-3");
  linelink("point-2", "point-3", "line-4");
  linelink("point-2", "point-7", "line-5");
  linelink("point-3", "point-4", "line-6");
  linelink("point-3", "point-7", "line-7");
  linelink("point-4", "point-5", "line-8");
  linelink("point-4", "point-7", "line-9");
  linelink("point-5", "point-6", "line-10");
  linelink("point-5", "point-7", "line-11");
  linelink("point-6", "point-7", "line-12");
}

$(document).ready(function () {
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
  allline();

});


var height = $(window).height();

$(window).scroll(function () {
  var nowheight = $(window).scrollTop();
  console.log(nowheight);
  var i = Math.floor(nowheight / height);
  $('.point').removeClass("active");
  $('.point').eq(i).addClass("active");
});

$(window).resize(function() { 
  allline();
});