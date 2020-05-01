// GIVEN I am using a daily planner to create a schedule
//variable for getting current date with Moment
let now = moment();
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
//load the moment.js library
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
$(".saveBtn").each(function(){
    //variable for current time in hours
    let current = moment().hours()
    //take the id of this element and split the id and parse the second value 
    let hour = parseInt($(this).attr("id").split("-")[1])
/// compare the hour with the current time
// if hour is lesss than current hour
if (hour < current) {
    //add class of past
    $(this).parent().addClass("past")
    //if hour is equal to the current hour
}else if(hour === current) {
    //add class of present
    $(this).parent().addClass("present")
    //otherwise
}else {
    //add class of future
    $(this).parent().addClass("future")
}
// WHEN I refresh the page// THEN the saved events persist
//take information from local storage with this id
let text = localStorage.getItem($(this).attr("id"))
//put value in textarea
$(this).siblings("textarea").val(text)
})
// WHEN I click into a timeblock// THEN I can enter an event
// WHEN I click the save button for that timeblock
$(".saveBtn").on('click', function(){
    let hour = parseInt($(this).attr("id").split("-")[1])
    let text = $(this).siblings("textarea").val()
// THEN the text for that event is saved in local storage
    localStorage.setItem($(this).attr("id"), text)
})






