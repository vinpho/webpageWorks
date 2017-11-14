

$(document).ready(function () {

	//小屏幕的菜单显示
	$('.menu_icon').click(function () {
		$('header nav').toggleClass('show');
		$('header .menu_icon').toggleClass('active');
	});


	// 文字轮播
	var timer = null;   //设置定时定时器的名字，方便后面关闭
	var index=0,cur=0;
	var textLen=$(".lists-text li").length; //当前选中的项数
	$(".lists-text li:not(:first-child)").hide();  //设置除第一张外的图片为隐藏
	
	//当鼠标移到向左和向右的图标上关闭定时器，离开时则重置定时器
    $(".slider-nav li.arrow_left,.slider-nav li.arrow_right").hover(function(){
        clearInterval( timer );
    },function(){
        changeAuto();
    });

    //当鼠标移到图片上关闭定时器，离开时则重置定时器
    $(".lists-text li").hover(function(){
        clearInterval( timer );
    },function(){
        changeAuto();
    });


	//左边箭头
	$(".slider-nav li.arrow_left").click(function () {
		cur = cur>0 ? (--cur) : (textLen-1);
		$(".lists-text li").eq(cur).show();
		$(".lists-text li").eq(cur).siblings().hide();
	});
	//右边箭头
	$(".slider-nav li.arrow_right").click(function () {
		 cur = cur<( textLen-1 ) ? (++cur) : 0;
		$(".lists-text li").eq(cur).show();
		$(".lists-text li").eq(cur).siblings().hide();
	});

	//封装文字自动播放函数
    function changeAuto(){
		timer=setInterval(function () {  //自动播放
			if(index>=3){
				index= -1;
			}	
			index++;
			$(".lists-text li").eq(index).show();
			$(".lists-text li").eq(index).siblings().hide();
		
		},2000);
	}
	 //调用函数
    changeAuto();


    //返回顶部，滚动代码
    $(window).scroll(function(){
	   	var sc=$(window).scrollTop();
	   	var rwidth=$(window).width();
	   	if(sc>0){
	    	$("#goTopBtn").css("display","block");
	    	$("#goTopBtn").css("left",(rwidth-36)+"px")
	   	}else{
	   		$("#goTopBtn").css("display","none");
	   	}
 	});
 	$("#goTopBtn").click(function(){
   		var sc=$(window).scrollTop();
   		$('body,html').animate({scrollTop:0},500);
 	});
});


