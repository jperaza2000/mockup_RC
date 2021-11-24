$("#question-two-for-me, #question-two-for-loved").hide();
$("#question-three-for-me, #question-three-for-loved").hide();
$("#question-four-for-me, #question-four-for-loved").hide();
$("#question-five-for-me, #question-five-for-loved").hide();

$(".form").attr('disabled', true);
$("#steps").show();

var current_cuestion = parseInt($("#current-question").html());

$(document).ready(function(){
    /* START FOR ME */
    $(".step-two-for-me").click(function(){
        $('input[name="question-one"]').val($(".step-two-for-me").text());
        $("#question-one").fadeOut('fast');
        $("#question-two-for-me").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $(".step-three-for-me").click(function(){
        $('input[name="question-two"]').val($(this).html());
        $("#question-two-for-me").fadeOut('fast');
        $("#question-three-for-me").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $('input[name="step-three-for-me"]').keyup(function() {
        if ( $(this).val().length == "4" ) {
            $('.step-four-for-me').attr('disabled', false);
        } else {
            $('.step-four-for-me').attr('disabled', true);
        }
    });

    $(".step-four-for-me").click(function(){
        if ( $('input[name="step-three-for-me"]').val().length == "4" ) {
            $('input[name="question-three"]').val($('input[name="step-three-for-me"]').val());
            $("#question-three-for-me").fadeOut('fast');
            $("#question-four-for-me").fadeIn('slow');
            $("#current-question").html(++current_cuestion);
        } else {
            $('.step-four').attr('disabled', true);
        }
    });

    $(".step-five-for-me").click(function(){
        $('input[name="question-four"]').val($('select[name="step-four-for-me"] option:selected').val());
        $("#question-four-for-me").fadeOut('fast');
        $("#question-five-for-me").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $(".step-six-for-me").click(function(){
        $('input[name="question-five"]').val($(".step-six-for-me").html());
        $("#question-five-for-me").fadeOut('slow');
        $(".form").attr('disabled', false);
        $("#steps").fadeOut('slow');
    });
    /* END FOR ME */

    /* START FOR A LOVED ONE */
    $(".step-two-for-loved").click(function(){
        $('input[name="question-one"]').val($(".step-two-for-loved").text());
        $("#question-one").fadeOut('fast');
        $("#question-two-for-loved").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $(".step-three-for-loved").click(function(){
        $('input[name="question-two"]').val($(this).html());
        $("#question-two-for-loved").fadeOut('fast');
        $("#question-three-for-loved").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $('input[name="step-three-for-loved"]').keyup(function() {
        if ( $(this).val().length == "4" ) {
            $('.step-four-for-loved').attr('disabled', false);
        } else {
            $('.step-four-for-loved').attr('disabled', true);
        }
    });

    $(".step-four-for-loved").click(function(){
        if ( $('input[name="step-three-for-loved"]').val().length == "4" ) {
            $('input[name="question-three"]').val($('input[name="step-three-for-loved"]').val());
            $("#question-three-for-loved").fadeOut('fast');
            $("#question-four-for-loved").fadeIn('slow');
            $("#current-question").html(++current_cuestion);
        } else {
            $('.step-four').attr('disabled', true);
        }
    });

    $(".step-five-for-loved").click(function(){
        $('input[name="question-four"]').val($('select[name="step-four-for-loved"] option:selected').val());
        $("#question-four-for-loved").fadeOut('fast');
        $("#question-five-for-loved").fadeIn('slow');
        $("#current-question").html(++current_cuestion);
    });

    $(".step-six-for-loved").click(function(){
        $('input[name="question-five"]').val($(".step-six-for-loved").html());
        $("#question-five-for-loved").fadeOut('fast');
        $(".form").attr('disabled', false);
        $("#steps").fadeOut('slow');
    });
    /* END FOR A LOVED ONE */
});