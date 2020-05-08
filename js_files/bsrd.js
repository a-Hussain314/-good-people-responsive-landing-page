$(document).ready(function(){

$(".work-button").click(function(){
        $(this).siblings().removeClass("active-1");
        $(this).addClass("active-1");
});

$(".why .pic").innerHeight($(".why .ref").innerHeight());
$(window).resize(function(){
        if(window.innerWidth > 992){
        $(".why .pic").innerHeight($(".why .ref").innerHeight());
        }
});

var x1 = $("div.mo1").position().top -$(".service").innerHeight()*1.1;
var x2;
var x3;

window.setTimeout(function(){
         x2 = $("div.mo2").position().top -$(".post").innerHeight()*.40;
         moveIn2();
         x3 = $("div.mo3").position().top -$(".why").innerHeight()*.40;
         moveIn3();
},1500)


function moveIn1 (){
        var stv = $(window).scrollTop();
        if(stv > x1 )
                {
                $("div.mo1").removeClass("mo1");        
                $(".moved-out:nth-child(1)").animate({opacity:"1"},{ queue: false, duration: 900 });
                $(".moved-out:nth-child(1)").animate({top:"0px"},{ queue: false, duration: 900 }).removeClass("moved-out");
                $(".moved-out:nth-child(2)").animate({opacity:"1"},{ queue: false, duration: 1200 });
                $(".moved-out:nth-child(2)").animate({top:"0px"},{ queue: false, duration: 1200 }).removeClass("moved-out");
                $(".moved-out:nth-child(3)").animate({opacity:"1"},{ queue: false, duration: 1500 });
                $(".moved-out:nth-child(3)").animate({top:"0px"},{ queue: false, duration: 1500 }).removeClass("moved-out");
                $(".moved-out:nth-child(4)").animate({opacity:"1"},{ queue: false, duration: 1800 });
                $(".moved-out:nth-child(4)").animate({top:"0px"},{ queue: false, duration: 1800 }).removeClass("moved-out");
                }
        }

function moveIn2 (){
        var stv2 = $(window).scrollTop();
        if(stv2 > x2 )
                {
                $("div.mo2").removeClass("mo2");        
                $(".post-box:nth-child(1)").animate({opacity:"1"},{ queue: false, duration: 900 });
                $(".post-box:nth-child(1)").animate({top:"0px"},{ queue: false, duration: 900 }).removeClass("post-box");
                $(".post-box:nth-child(2)").animate({opacity:"1"},{ queue: false, duration: 1200 });
                $(".post-box:nth-child(2)").animate({top:"0px"},{ queue: false, duration: 1200 }).removeClass("post-box");
                $(".post-box:nth-child(3)").animate({opacity:"1"},{ queue: false, duration: 1500 });
                $(".post-box:nth-child(3)").animate({top:"0px"},{ queue: false, duration: 1500 }).removeClass("post-box");  
                }
        } 

        function moveIn3 (){
                var stv3 = $(window).scrollTop();
                if(stv3 > x3 )
                        {
                        $("div.mo3").removeClass("mo3");        
                        $(".mol").animate({left:"0%" },{ queue: false, duration: 1200 }).removeClass("mol");
                        $(".mor").animate({right:"0%"},{ queue: false, duration: 1200 }).removeClass("mor");
   
                        }
                } 

moveIn1();
$(window).scroll(moveIn1);
$(window).scroll(moveIn2);
$(window).scroll(moveIn3);
$('#Container').mixItUp();
$('.toast').toast('show');
$('[data-toggle="popover"]').popover(); 
$('[data-toggle="tooltip"]').tooltip();
$('.carousel').carousel();

})





