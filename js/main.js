var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3' , 'section4', 'section5','section6','section7'],
    scrollBar:true,
});






$(document).ready(function(){
	
    $("#skillbar_pho").animate({width:'93%'},1500);
    $("#skillbar_html").animate({width:'83%'},1500);
    $("#skillbar_css").animate({width:'83%'},1500);
    $("#skillbar_js").animate({width:'65%'},1500);
});
/*skill bar*/

new WOW().init();
/*페이지 내림과 동시에 애니메이션 작동 */


$('.slider_clock').EasySlides({
    'show': 15,
    'autoplay':true,
    })

 /*mobile site view 창 넓이 */   
function winOpen(){
    window.open('https://leehb0927.github.io/sfw_mobile/','popup','width=515, height=900, left=100, top=20')
}



function diorOpenM(){
    window.open(
        'https://leehb0927.github.io/responsible_dior/','popup','width=515, height=900, left=100, top=20'
        )
}
function diorOpenT(){
    window.open(
        'https://leehb0927.github.io/responsible_dior/','popup', 'width=1091 height=900, left=100, top=20'
    )
}

function chezOpenM(){
    window.open(
        'https://leehb0927.github.io/cheznousaparis/','popup','width=515, height=900, left=100, top=20'
        )
}
function chezOpenT(){
    window.open(
        'https://leehb0927.github.io/cheznousaparis/','popup', 'width=1091 height=900, left=100, top=20'
    )
}



$('.slider_one_big_picture').EasySlides()
