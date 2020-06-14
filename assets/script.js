// Build out time block rows. 
var hoursInDay = [9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17];
var hoursString = ['9am',
                    '10am', 
                    '11am',
                    '12pm',
                    '1pm',
                    '2pm',
                    '3pm',
                    '4pm',
                    '5pm'];

var hoursInDayIndex = 0;
var now = moment();

var currentDay = moment().day();
var dayName = moment(dayName).format('dddd')
console.log(currentDay)
let current_Time = moment().format("HH:mm")
let current_Hour = moment().format('HH');
console.log(current_Hour)




// var currentTime = moment().format("h A");
//     var blockTime = arrayOfHours[i];
//     if (blockTime.match(currentTime)) {
//       $(".time-sensitive").attr("style", "background-color: red");
//     }
// Collapse



for (var i = 0; i < hoursString.length; i++ ){
    var dayHours = hoursString
    var dayHoursNumber = hoursInDay[i];
    var calHour = $('#' + hoursInDay[i])


    // This block of code is creating the rows, columns and buttons. 
var timeBlockEl = $('<div></div>')
    timeBlockEl.addClass('time-block')
var hourRows = $('<div></div>')
    hourRows.addClass('row hour-row')
var hourArea = $('<div></div>')
    hourArea.addClass('hour col-2')
var hourColumn = $('<input>')
    hourColumn.addClass('col-9')
    hourColumn.addClass('time-' + dayHoursNumber[i])
    hourColumn.attr('id', dayHoursNumber[i])
var saveButton = $('<button></button>')
    saveButton.addClass('col-1 display-icon saveBtn btn ')
    saveButton.addClass('i fas fa-lock')


    if (dayHoursNumber === current_Hour) {
        hourColumn.addClass('present')
    } else if (dayHoursNumber < current_Hour){
    hourColumn.addClass('past')
    console.log(dayHoursNumber)
    } else if (dayHoursNumber > current_Hour) {
        hourColumn.addClass('future')
    }


// This is appending the rows, columns and buttons to the site. 
$(hourRows).append(hourArea)
$(hourRows).append(hourColumn);
$(timeBlockEl).append(hourRows);
$('.container').append(timeBlockEl);
$(hourRows).append(saveButton);
$(hourArea).text(dayHours[i]);

// storeCalendar() 
// renderCalendar()
// init()

// // saveButton.on('click', function(){
// // localStorage.setItem("Planner", JSON.stringify('#col-9')
// // console.log('You clicked me')

// renderCalendar();
}

    // $('.container').append(timeRows)


    

// for (var i = 0; i < hoursInDay.length; i++){
//     var dayHoursNumber = hoursInDay;
//     hourArea.attr('id', dayHoursNumber[i])

// function storeCalendar() {
//     // Stringify and set "todos" key in localStorage to todos array
//     localStorage.setItem("col-9", JSON.stringify(hourColumn));
//   }


// // Build out save buttons. 
// // Build out text area. 
// // Build out time function.
// // Build out local storage.
// function renderCalendar(){

// hourColumn.text('');}



// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedHourly = JSON.parse(localStorage.getItem("col-9"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     // Render todos to the DOM
//     renderCalendar();
//   }
