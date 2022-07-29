new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    //sectionsColor: ['#111', '#111', '#EBE7E4', '#EBE7E4'],
    navigation: true,
	  navigationPosition: 'right',
    navigationTooltips: ['Mokoko','NHN', 'LotteHotel', 'GedaCure','Tiretech', 'AsanHospital'], 
    easing: 'easeInOutCubic',
    anchors: ['first', 'second', 'third', 'fourth'],
    menu: '.gnb_list',
    normalScrollElements:'#s1', //오토스크롤이 아니라 정상 스크롤이 작동
    responsiveHeight:350, //세로가 특정 수치보다 작아졌을 때 autoscroll 작동x
});


//햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},500);
        $('navbar_gnb').animate({left:-250},500);  
    } else {
        $('.gnb').animate({right:-350},300);
        $('navbar_gnb').animate({left:0},300); 
    }   
});






(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

})(jQuery); 