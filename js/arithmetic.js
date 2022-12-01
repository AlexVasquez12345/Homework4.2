//Links used for help in completion of assignment:
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//https://stackoverflow.com/questions/41465569/multiplication-table-in-javascript
//https://getbootstrap.com/docs/4.0/content/tables/
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
//https://jqueryui.com/tabs/
function Arithmetic() {
    //grabs all of the values from the form input
    var x_min = document.getElementById("min_x").value;
    var x_max = document.getElementById("max_x").value;
    var y_min = document.getElementById("min_y").value;
    var y_max = document.getElementById("max_y").value;

    //converts inputs from text to a base 10 integer
    var int_x_min = parseInt(x_min, 10);
    var int_x_max = parseInt(x_max, 10);
    var int_y_min = parseInt(y_min, 10);
    var int_y_max = parseInt(y_max, 10);

    //No Longer needed because valid_input.js will confirm if we got the right answer
    /*
    //because the form only accepts integers, the only error check we need to make
    //is if the user inputs an integeer less than -50 or greater than 50, then we
    //return from the function and the html will display the error
    if((int_x_min <= -50 || int_x_max >= 50) || (int_y_min <= -50 || int_y_max >= 50)) {
        return;
    }
    // if the min is greater than the max, then exit without display the table
    if (int_x_min > int_x_max || int_y_min > int_y_max) {
        return;
    }
    */
    /* Because my previous code in part 3 did not restart the original table that was outputted
    to thte string, I need to create my table in a different way in order for valid_input.js to work
    as intended for this assignment.
    */

    //Finds the total amount of x and total amount of y
    //by subtracting the min by the max and finding the absolute value of that
    var total_x = Math.abs(int_x_min - int_x_max);
    var total_y = Math.abs(int_y_min - int_y_max);
    //temp values of the beginning values of x and y
    var temp_x = int_x_min;
    var temp_y = int_y_min;

    //creates a 2D array in JavaScript using the total
    //values we garnered from x and y
    var temp_table = new Array(total_x + 1);
    for(var i = 0; i < temp_table.length; i++) {
        //for each row within the array, we will make a corresponding column
        temp_table[i] = new Array(total_y + 1);
    }

    //the actual arithemtic that I needed to redo because the old logic I had
    //in hw3 was not going to work for the need for the table to reappear after
    //each new input by the user.
    for(var i = 0; i < temp_table.length; i++) {
        for(var x = 0; x < temp_table[i].length; x++) {
            temp_table[i][x] = temp_x * temp_y;
            //allows us to go to a new column
            temp_y += 1;
        }
        //allows us to go on to a new row
        temp_x += 1;
        //reset column so we can start all over again
        temp_y = int_y_min;
    }
    //using bootstrap, link above, create a table that is bordered with the first value in the row
    //containing the value X as per instructed in the assignment
    var my_table = '<table class="table table-bordered"><tr><td>X</td>';


    for (var i = int_y_min; i <= int_y_max; i++) {
        //fills the first row with the corresponding values
        my_table += "<td>" + i + "</td>";
    }

    //finish the row and reset tempx
    my_table += "</tr>"
    temp_x = int_x_min;


    for (var i = 0; i <= total_x; i++) {
        //will fill in the column with the corresponding value
        my_table += "<tr><td>" + temp_x + "</td>";

        //creates a new data point and then goes into the 2D array to
        //actually fill in the table with the correct arithmetic
        for (var x = 0; x <= total_y; x++) {
            my_table += "<td>" + temp_table[i][x] + "</td>";
        }
        //finishes the row and increases tempx to go on to the next row
        my_table += "</tr>"
        temp_x += 1;
    }
    //finishes the table
    my_table += "</table>"

    //very important part, creates a variable that corresponds to the element I created in
    //index.html and sets it to a local variable called ultimate_table. Then ultimate_table
    //then access it's innerHTML and sets it equal to my_table to effectively post the table to the screen
    var ultimate_table = document.getElementById('true_table');
    ultimate_table.innerHTML = my_table;

}

function Storage() {
    holder += 1;
    $("#my_tabs").tabs();
    //grabs all of the values from the form input
    var x_min = document.getElementById("min_x").value;
    var x_max = document.getElementById("max_x").value;
    var y_min = document.getElementById("min_y").value;
    var y_max = document.getElementById("max_y").value;

    //converts inputs from text to a base 10 integer
    var int_x_min = parseInt(x_min, 10);
    var int_x_max = parseInt(x_max, 10);
    var int_y_min = parseInt(y_min, 10);
    var int_y_max = parseInt(y_max, 10);

    //Super long statement that will actually create the tab using HTML and also format the values so it looks nice
    var values = "<li class='tab'><a href='#tab-" + holder + "'>" + y_min + " x " + y_max + " with " + x_min + " x " + x_max + "</a>" + "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";

    //actually put the values into the tab list
    $("#my_tabs ul").append(values);

    //This will put the table we calculated to our tab. If this is not here
    //then the table will never display
    $("#my_tabs").append('<div id="tab-' + holder + '">' + $("#true_table").html() + '</div>');

    //Allows the new tabs to display when they are placed
    $("#my_tabs").tabs("refresh");

    //Makes the new tabs "active"
    $("#my_tabs").tabs("option", "active", -1);

    //Gonna be honest, this part gave me a headache, but I used this link
    //in order for the code to run: //https://jqueryui.com/tabs/
    $("#my_tabs").delegate("span.ui-icon-close", "click", function() {
        var p_id = $(this).closest("li").remove().attr("aria-controls");
        $("#" + p_id).remove();
        $("#tabs").tabs("refresh");
        if ($('#tabs ul li.tab').length == 0) {
            try {
                $("#tabs").tabs("destroy");
            } catch (e) {}

            return false;
        }
    });
}
 
