// Build out time block rows. 
var hoursInDay = ["9am",
                "10am",
                "11am",
                "12pm",
                "1pm",
                "2pm",
                "3pm",
                "4pm",
                "5pm"];
var hoursInDayIndex = 0;
var now = moment();

var currentDay = moment().day();
var dayName = moment(dayName).format('dddd')
console.log(currentDay)



    // let hourArea = $('<div></div>')
    // hourArea.addClass('hour col-2')
    // hourArea.text(this)
    // $('.row').append(hourArea)



for (var i = 0; i < hoursInDay.length; i++ ){
    var dayHours = hoursInDay
    console.log(dayHours)
    var timeBlockEl = $('<div></div>')
timeBlockEl.addClass('time-block')
var hourRows = $('<div></div>')
    hourRows.addClass('row hour-row')
var hourArea = $('<div></div>')
    hourArea.addClass('hour col-2')
var hourColumn = $('<input>')
    hourColumn.addClass('col-9')

var saveButton = $('<button></button>')
    saveButton.addClass('col-1 display-icon saveBtn btn ')
    saveButton.addClass('i fas fa-lock')





$(hourRows).append(hourArea)
$(hourRows).append(hourColumn);
$(timeBlockEl).append(hourRows);
$('.container').append(timeBlockEl);
$(hourRows).append(saveButton);
$(hourArea).text(dayHours[i]);





    // $('.container').append(timeRows)


    
}


// Build out save buttons. 
// Build out text area. 
// Build out time function.
// Build out local storage.


