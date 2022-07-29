new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#111', '#111'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['Main','Introduce','Useable Tools'], 
    easing: 'easeInOutCubic',
    anchors: ['first', 'second', 'third', 'fourth'],
    menu: '.gnb_list',
    normalScrollElements: '#s1', //오토스크롤이 아니라 정상 스크롤이 작동
    responsiveHeight:350, //세로가 특정 수치보다 작아졌을 때 autoscroll 작동x
});






//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},500);
        $('header').animate({left:-250},500);  
    } else {
        $('.gnb').animate({right:-250},300);
        $('header').animate({left:0},300); 
    }   

});

//모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그대로 보이고,li에 on 클라스가 계속 있는 상태 해결
$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $(".navbar .navbar_gnb > li").removeClass('on');
    }
});





// Skills Bars
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });