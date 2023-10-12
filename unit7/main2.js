$(document).ready(function(){
    $("h1").click(function(event){
        event.stopPropagation();
        $("#nav").css("display",'none');
        $("#menu").css('display','none');
        $("#nav").css("display",'block');
        $("#nav").css("transform",'translateX(0px)')
        $("#mask").css("display",'block');
    })

    $("#mask").click(function(event){
        event.stopPropagation();
        $(this).css("display",'none');
        $("#nav").css("transform",'translateX(500px)')
        $("#nav").css("display",'none')
        $("#menu").css('display','flex');
    })

    $("#nav h1").click(function(event){
        event.stopPropagation();
        $("#nav").css("transform",'translateX(500px)')
        $("#nav").css("display",'none')
        $("#menu").css('display','flex');
        $("#mask").css("display",'none');
    })

    let count=0;
    $("#nav li").click(function(event){
        
        event.stopPropagation();
        if(count%2==0){
            $(this).children().css("display",'block');
        }
        else{
            $(this).children().css("display",'none');
        }
        count++;
    })
})