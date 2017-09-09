$(function(){
    $("div.leftBut").addClass('bg3'); // 初始化时添加背景1
    $("div.leftBut").click(function() {
        $(this).toggleClass('bg3').toggleClass('bg4');
    });
})

$('.leftBut').toggle(function(){
	$("#head_xl").show();
	$('.selectList').slideDown();
	$('.zg1').slideDown();
	
},function(){
	$("#head_xl").hide();
	$('.selectList').slideUp();
	$('.zg1').slideUp();
});

$(function(){
    $("div.rightBut").addClass('bg1'); // 初始化时添加背景1
    $("div.rightBut").click(function() {
        $(this).toggleClass('bg1').toggleClass('bg2');
    });
})

$('.rightBut').toggle(function(){
	$("#head_xl").show();
	$('.popMenus').slideDown();
	$('.zg').slideDown();
},function(){
	$("#head_xl").hide();
	$('.popMenus').slideUp();
	$('.zg').slideUp();
});

function show(){
	document.getElementById("head_xl").style.display="block";
}
function hide(){
	document.getElementById("head_xl").style.display="none";
}
//匹配列表页左侧div的高度
/*$(document).ready(function(){
	var baiH = $('.rightBai').eq(0).height();  //获取右侧文章列表的高度
	var huiH = $('.leftHui').eq(0).height();  //获取左侧菜单列表的高度
	var mh = Math.max( huiH, baiH);
	$('.listPageCon').height(mh);
});

//点击切换选项卡
$('.cofclick').click(function(){
	var t = $(this).attr('t');
	$(this).addClass('cofbj').siblings('.cofclick').removeClass('cofbj');
	$('.zjlist').eq(t).show().siblings('.zjlist').hide();
});

//首页切换选项卡
$('.indexli').click(function(){
	var t = $(this).attr('t');
	$(this).addClass('click').siblings('.indexli').removeClass('click');
	$('.xmList').eq(t).show().siblings('.xmList').hide();;
});
*/

//给栏目添加class
$(".lmlist").each(function(i){
	var c = 'lm'+i;
	$(this).addClass(c);
});

/*var scw = $('.altu').width();  //获取当前显示的宽度
// alert(scw);  
var qhw = $('.altu').find('li').width();  //获取每一个li的宽度
// alert(qhw);
var mar = (scw-qhw*3)/4;   //计算每个li之间的间隔
// alert(mar);
var off = mar+qhw;   //计算每次滚动的距离
// alert(off);
var num = $('.altu').find('li').length;  //获取图片的数量
// alert(num);
var cnum = num-3;  //计算显示图片和所有图片的数量差值
// alert(cnum); 
var end = cnum*off;  //计算滚动的极限距离
// alert(end);
var v = 0;
$('.alsh').eq(0).click(function(){
	v+= off;
	if(v > 0){
		v = 0;
	}
	$('.altu ul').animate({
		left:v,
	});
});
$('.alxh').eq(0).click(function(){
	v-= off;
	if(v < -end){
		v = 0;
	}
	$('.altu ul').animate({
		left:v,
	});
});*/

//点击左侧小缩略图，右侧变化
// $('.altu').find('li').click(function(){
// 	lis = $(this).find('div').attr('lis');
// 	$(this).find('div').addClass('qc');
// 	$(this).siblings('li').find('div').removeClass('qc');
// 	$('.lblist').eq(lis).show().addClass('altshow');
// 	$('.lblist').eq(lis).siblings().removeClass('altshow').hide();
// });
/*var rlw = $('.altulh').width();
var rln = $('.altulh').find('li').length;
var zlw = rlw*(rln-1);
var b = 0;
$('.altleft').eq(0).click(function(){
	b+= rlw;
	if(b > 0){
		b = 0;
	}
	$('.altulh').find('ul').animate({
		left:b,
	});
});
$('.altright').eq(0).click(function(){
	b-= rlw;
	if(b < -zlw){
		b = 0;
	}
	$('.altulh').find('ul').animate({
		left:b,
	});
});

var bbb = window.location.pathname;  //获取地址栏信息
	$('.allm').each(function(){ 
		if($(this).attr('cs') == bbb){  //如果 li 的cs 属性之和地址栏获取的一样
			$(this).find('div').addClass('qc');  //该li 发生变化
			num = $(this).prevAll('li').length;  //获取当前li 前面的兄弟元素有几个，用来判断翻页
			rv = (Math.floor(num/3)*off);
			$('.altu ul').css({
				left:-rv,
			});

		}
	});

if(bbb == '/alzs/'){
	var hf = $('.allm').eq(0).attr('cs');
	window.location.href = hf;
}

var mtop = $('.top').height();
var turetop = mtop-7;
$('.banner').css({
	'marginTop':turetop,
});*/