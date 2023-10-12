//=============bai 16.1===================
$(document).ready(function() {
    $(".container ul li").click(function(event) {
        event.stopPropagation();
        $(this).css('z-index','1')
        $(this).css('position', 'absolute');
        $(this).css('transform', 'scale(4)');
        $(this).parent().next("#mask").css("display",'block')
        $("button").css("display",'block');
    });

    $(".container ul li button").click(function(event){
        event.stopPropagation();
        
        $("button").css('display','none');
        $(".container ul li").css('z-index','0');
        $(".container ul li").css('position', 'unset');
        $(".container ul li").css('transform', 'scale(1)');
        $('#mask').css('display','none');
    })

    $("#mask").click(function() {
        $("button").css("display",'none');
        $(this).css('display','none');
        $(".container ul li").css('z-index','0');
        $(".container ul li").css('position', 'unset');
        $(".container ul li").css('transform', 'scale(1)');
        
    });
});
