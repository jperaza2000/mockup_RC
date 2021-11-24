$(document).ready(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let subdomain = "paraquat";
    subdomain = (urlParams.get('page'))?urlParams.get('page'):subdomain;
    //const subdomain = "3m-earplugs3";
    $("#completion_form").hide();
    var current_question = 1;
    $("#current-question").html(current_question);
    let questions;

    $.getJSON( "js/questions.json", function( data ) {
        questions = data[subdomain].questions;
        $("#total-question").html(questions.length);
        questions.forEach((element, index) => {
            $("#questions").append(
                '<div class="container-fluid question" id="question-'+ parseInt(index+1) +'">\
                    <div class="row justify-content-center">\
                        <div class="col-md-6 col-sm-12 text-center">\
                            <p class="question_number">'+ parseInt(index+1) +'</p>\
                            <span class="yellow" id="question">'+element.question+'</span>\
                        </div>\
                    </div>\
                </div>');
            if ( element.answers_type == 'yes_no' ) {
                $("#question-" + parseInt(index+1)).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-2 p-2">\
                            <button type="button" class="btn btn-primary w-100 step">'+element.answers_value[0]+'</button>\
                        </div>\
                        <div class="col-md-2 p-2">\
                            <button type="button" class="btn btn-success w-100 step">'+element.answers_value[1]+'</button>\
                        </div>\
                        <input type="hidden" name="'+element.input_name+'" id="'+element.input_name+'">\
                    </div>\
                    <div class="row justify-content-center">\
                        <div class="col-md-6 col-sm-12 text-center">\
                            <div class="question_separator"></div>\
                        </div>\
                    </div>'
                    );
            } else if ( element.answers_type == 'input' ) {
                $("#question-" + parseInt(index+1)).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-1 p-2">\
                            <input type="text" validation="'+element.validation+'" id="input_'+element.input_name+'" class="form-control text-center" placeholder="'+element.input_placeholcer+'" maxlength="'+element.input_maxlength+'" required>\
                        </div>\
                        <div class="col-md-1 p-2">\
                            <button type="button" class="btn btn-success w-100 step">'+element.btn_text+'</button>\
                        </div>\
                        <input type="hidden" name="'+element.input_name+'" id="'+element.input_name+'">\
                    </div>\
                    <div class="row justify-content-center">\
                        <div class="col-md-6 col-sm-12 text-center">\
                            <div class="question_separator"></div>\
                        </div>\
                    </div>'
                );
            } else if ( element.answers_type == 'select' ) {
                var select_option = "";
                element.answers_value.forEach((answer, i) => {
                    select_option += '<option value="'+answer+'">'+answer+'</option>';
                });

                $("#question-" + parseInt(index+1)).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-2 col-sm-10 text-center pb-2">\
                            <select class="form-select form-control form-select-md" id="select_' + element.input_name+'" name="'+element.input_name+'">\
                                <option selected value="">-- Select --</option>\
                                ' + select_option + '\
                            </select>\
                        </div>\
                        <div class="col-md-1 p-2">\
                            <button type="button" class="btn btn-success w-100 step">'+element.btn_text+'</button>\
                        </div>\
                        <input type="hidden" name="'+element.input_name+'" id="'+element.input_name+'">\
                    </div>\
                    <div class="row justify-content-center">\
                        <div class="col-md-6 col-sm-12 text-center">\
                            <div class="question_separator"></div>\
                        </div>\
                    </div>'
                );
            }
        });
        $('.question').hide();
        $('#question-1').show();
    });

    $(document).on('click', '.step', function() {
        if ( questions[parseInt(current_question-1)].answers_type == "input" ) {
            $('#input_question-' + current_question).val($('#input_' + questions[parseInt(current_question-1)].input_name).val());
        } else if ( questions[parseInt(current_question-1)].answers_type == "select" ) {
            $('#input_question-' + current_question).val($('#select_' + questions[parseInt(current_question-1)].input_name + ' :selected').val());
        } else {
            $('#input_question-' + current_question).val($(this).html());
        }
        if ( questions[parseInt(current_question)] ) {
            if ( questions[current_question].is_children == "yes" ) {
                var a = 'question_' + $('#input_question-' + current_question).val().replaceAll(" ", "_");
                questions[current_question].question = questions[current_question][a];
            }
        }
        current_question++;
        $('.question').hide();
        if ( questions[parseInt(current_question-1)] ) {
            $("#current-question").html(current_question);
            $('#question-' + current_question).show();
            $('#question-' + current_question + ' #question').html(questions[parseInt(current_question-1)].question);
        } else {
            $("#completion_form").show();
            console.log("SE ACABARON LAS PREGUNTAS!!");
        }
    });
});