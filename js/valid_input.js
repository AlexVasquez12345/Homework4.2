//Links used for help in completion of assignment:
//https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
//https://jqueryui.com/slider/

//global variable that allows us to adds more tabs
var holder = 1;
$(function() {
    /*Basic Syntax of a slider goes as follows,
    the name of the slider, then the minimum and max
    values of the slider, with the slide function that
    actually coorelates the value with what you slided*/
    /*Also, the keyup portion that basically submits the 
    values once we input the values, so there is no more need
    to actually press the submit*/
    $("#min_x_slider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#min_x").val(ui.value);
            $("#my_table").submit();
        }
    });
    $("#min_x").on("keyup", function() {
        $("#min_x_slider").slider("value", this.value);
        $("#my_table").submit();
    });
    $("#min_y_slider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#min_y").val(ui.value);
            $("#my_table").submit();
        }
    });
    $("#min_y").on("keyup", function() {
        $("#min_y_slider").slider("value", this.value);
        $("#my_table").submit();
    });

    $("#max_x_slider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#max_x").val(ui.value);
            $("#my_table").submit();
        }
    });
    $("#max_x").on("keyup", function() {
        $("#max_x_slider").slider("value", this.value);
        $("#my_table").submit();
    });

    $("#max_y_slider").slider({
        min: -50,
        max: 50,
        slide: function(event, ui) {
            $("#max_y").val(ui.value);
            $("#my_table").submit();
        }
    });
    $("#max_y").on("keyup", function() {
        $("#max_y_slider").slider("value", this.value);
        $("#my_table").submit();
    });
    
    // Creates the form validation procedure
    $("form[name='my_table']").validate({
        //Laws that need to be followed in order
        //for the code to execute
        rules: {
            //required meaning that a value must be inputted
            //number meaning that the value must be an integer
            //min meaning the minimum value that the integer can be
            //max meaning the maximum value that the integer can be
            x_min: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            x_max: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            y_min: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            y_max: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },

        },
        //error messages that will be displayed in the case where the user
        //does not follow the aforementioned rules above.
        messages: {
            x_min: {
                required: "You may only enter a minimum x value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            x_max: {
                required: "You may only enter a maximum x value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            y_min: {
                required: "You may only enter a minimum y value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
            y_max: {
                required: "You may only enter a maximum y value between -50 and 50",
                number: "Please enter a valid integer value",
                min: "The value is too small. Please enter a value greater than -50",
                max: "The value is too big. Please enter a value less than 50"
            },
        },
        //will only run Arithmetic function if the input is correct
        submitHandler: function() {
            Arithmetic();
            return false;
        },
        //In the case where we input something incorrect, then we display an empty table
        invalidHandler: function() {
            $("#true_table").empty();
        },
        //when we finished typing, automatically submit the table
        onkeyup: function( element, event ) {
            submitForm();
          }
    });
});

