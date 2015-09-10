var main = function(){
$('#wrap1').show();
    $('.addTimeZone1').click(function(){
        $('#wrap1').toggle();
    });

    $('.addTimeZone2').click(function(){
        $('#wrap2').toggle();
    });

    $('.addTimeZone3').click(function(){
    	$('#wrap3').toggle();
    });

    $('.addTimeZone4').click(function(){
        $('#wrap4').toggle();
    });

};

$(document).ready(main);