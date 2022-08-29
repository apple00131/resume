$(document).ready(function(){

    $('.a-hero').animate({
        opacity: 1,
    },1500)

    $(window).scroll(function(){
        $(".tool-chart").each(function(){
      
            var progress = $(this).attr("data-progress");
            
            $(this).children(".bar").children("span").animate({
              width: progress + "%",
            },1500)
          })
    })

    $(".a-nav_bar").click(function(){
        // $(this).css("display",'none');
        $(".a-dropmenu").css('display','block');
    })
    $(".a-menuClose").click(function(){
        $(".a-dropmenu").css('display','none');
    })
})