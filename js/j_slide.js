$(function(){
	var w = $("#mwt_slider_content0").width();
	$('#mwt_slider_content0').css('height', ($(window).height() - 2) + 'px' ); //將區塊自動撐滿畫面高度

	//$("#mwt_fb_tab").mouseover(function(){ //滑鼠滑入時
	$("#showRight0").click(function(){ //滑鼠點下時
	if ($("#mwt_mwt_slider_scroll0").css('right') == '-'+w+'px')
	{
	$("#mwt_mwt_slider_scroll0").animate({ right:'0px' }, 600 ,'swing');
	}		
	});
		
	//$("#mwt_slider_content").mouseleave(function(){　//滑鼠離開後
	$("#cross1").click(function(){　//滑鼠再點一下後
	$("#mwt_mwt_slider_scroll0").animate({ right:'-'+w+'px' }, 600 ,'swing');
	});						
});
//*********************************************************************//
$(function(){
	var w = $("#mwt_slider_content1").width();
	$('#mwt_slider_content1').css('height', ($(window).height() - 20) + 'px' ); //將區塊自動撐滿畫面高度

	$("#showRight1").click(function(){ //滑鼠點下時
	if ($("#mwt_mwt_slider_scroll1").css('right') == '-'+w+'px')
	{
	$("#mwt_mwt_slider_scroll1").animate({ right:'0px' }, 600 ,'swing');
	}
	});

	$("#cross2").click(function(){　//滑鼠再點一下後
	$("#mwt_mwt_slider_scroll1").animate({ right:'-'+w+'px' }, 600 ,'swing');
	});
});
//*********************************************************************//
$(function(){
	var h = $("#mwt_slider_content2").height();
	$('#mwt_slider_content2').css('width', ($(window).width() - 800) + 'px' ); //將區塊自動撐滿畫面寬度

	$("#showTop").click(function(){ //滑鼠點下時
	if ($("#mwt_mwt_slider_scroll2").css('top') == '-'+h+'px')
	{
	$("#mwt_mwt_slider_scroll2").animate({ top:'0px' }, 600 ,'swing');
	}
	});
	$("#mwt_slider_content2").click(function(){　//滑鼠再點一下後
	$("#mwt_mwt_slider_scroll2").animate({ top:'-'+h+'px' }, 600 ,'swing');
	});
	});
//*********************************************************************//
		