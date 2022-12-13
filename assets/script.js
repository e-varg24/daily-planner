// var declare to display date
var time = moment();

// displays date on the scheduler
function setSchedule() {

    $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
 

    // saves input loal storage
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setSchedule();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

// color coding based on time block (past, present, future)
function alltime() {
    console.log(alltime)
    console.log(time)

    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

alltime();