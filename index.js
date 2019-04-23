console.log('test');

$('document').ready(function(){
    if ( $(window).scrollTop() == 0) {
        $("#header").css('background-color', 'transparent');
        $(".info-container, .phone-number, .email-contact").css('color', 'white');
    } else {
        $("#header").css('background-color', '#fafafa');
        $(".info-container, .phone-number, .email-contact").css('color', 'black');
    }
    $("#header").on('scroll', function(){
        $(this).css('background-color', '#fafafa');
        console.log('test111');
    });
    $(window).scroll(function(){
        if ( $(window).scrollTop() == 0) {
            $("#header").css('background-color', 'transparent');
            $(".info-container, .phone-number, .email-contact").css('color', 'white');
        } else {
            $("#header").css('background-color', '#fafafa');
            $(".info-container, .phone-number, .email-contact").css('color', 'black');
        }
    });
});