$(document).ready(function(){
    $('.choice').on('click', function(e){
        $('.choice').removeClass('check');
        $(this).addClass('check');
        $('#vin').val($(this).val());
    });
});