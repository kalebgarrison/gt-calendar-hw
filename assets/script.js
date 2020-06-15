// Array of hours that is used for the day planner
var hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hoursString = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

// Global variables.
var hoursInDayIndex = 0;
var now = moment();

var currentDay = moment().day();
var dayName = moment(dayName).format("dddd");
var current_Time = moment().format("HH:mm");
var current_Hour = moment().format("HH");
var monthDay = moment().format("dddd, MMMM Do, YYYY");

// This is displaying the current date on the top of the page.
$("#currentDay").text(monthDay);

// For loop that dynamically generates the hour rows, columns and buttons.
for (var i = 0; i < hoursString.length; i++) {
  var dayHours = hoursString;
  var dayHoursNumber = hoursInDay[i];
  var calHour = $("#" + hoursInDay[i]);

  var timeBlockEl = $("<div></div>");
  timeBlockEl.addClass("time-block");
  var hourRows = $("<div></div>");
  hourRows.addClass("row hour-row");
  var hourArea = $("<div></div>");
  hourArea.addClass("hour col-2");
  var hourColumn = $("<input>");
  hourColumn.addClass("col-9");
  hourColumn.addClass("time-" + dayHoursNumber);
  hourColumn.addClass("planner");
  hourColumn.attr("id", "input-" + dayHoursNumber);
  var saveButton = $("<button></button>");
  saveButton.addClass("col-1 display-icon saveBtn btn ");
  saveButton.addClass("i fas fa-lock");

  if (dayHoursNumber == current_Hour) {
    hourColumn.addClass("present");
  } else if (dayHoursNumber < current_Hour) {
    hourColumn.addClass("past");
    console.log(dayHoursNumber);
  } else if (dayHoursNumber > current_Hour) {
    hourColumn.addClass("future");
  }

  // This is appending the rows, columns and buttons to the site.
  $(hourRows).append(hourArea);
  $(hourRows).append(hourColumn);
  $(timeBlockEl).append(hourRows);
  $(".container").append(timeBlockEl);
  $(hourRows).append(saveButton);
  $(hourArea).text(dayHours[i]);
}

// This is allowing the save button to save the info into localStorage.
$(".saveBtn").on("click", function () {
  localStorage.setItem("Planner", JSON.stringify("#col-9"));
  var plannerClick = $(this).siblings(".planner").val();
  var key = $(this).siblings(".planner").attr("id");
  // renderCalendar();
  localStorage.setItem(key, plannerClick);
});
$("#input-9").val(localStorage.getItem("input-9"));
$("#input-10").val(localStorage.getItem("input-10"));
$("#input-11").val(localStorage.getItem("input-11"));
$("#input-12").val(localStorage.getItem("input-12"));
$("#input-13").val(localStorage.getItem("input-13"));
$("#input-14").val(localStorage.getItem("input-14"));
$("#input-15").val(localStorage.getItem("input-15"));
$("#input-16").val(localStorage.getItem("input-16"));
$("#input-17").val(localStorage.getItem("input-17"));
