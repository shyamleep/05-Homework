$(document).ready(function () {

    var scheduleHourArray = $(".hour")
    var description = $(".description").val;
    var currentHour = moment().hour();

    console.log(currentHour)

    $(".hour").each(function () {
        for (var i = 0; i < scheduleHourArray.length; i++) {
            scheduleHour = (scheduleHourArray[i].id).slice(-2)
        }

            // console.log(currentHour - scheduleHour)

            // if (scheduleHour < currentHour) {
            //     $(scheduleHour.child).addClass("past")
            // }

            // else if (scheduleHour > currentHour) {
            //     $(scheduleHour.child).addClass("future")
            // }

            // else if (scheduleHour === currentHour) {
            //     $(scheduleHour.child).addClass("present")
            // }
        
    }
    )


    // display current day, date, and time

    $("#currentDay").text(moment().format("dddd, MMMM do YYYY, hh:mm A"))

    // function to class description blocks
    $(".hour")(function () {
        console.log(this.id)
    })

    //     // check current time of day in hours to class description block

    //     console.log(currentHour)
    //     console.log(typeof(currentHour))



    //     // function to read what's stored in local storage and display it


        $(".saveBtn").on("click", function() {
            var description = $(".saveBtn").siblings(".description").val
            var time = $("saveBtn").siblings(".hour").val
            

        })

        console.log(scheduleHour)
        console.log(description)

        $(".description").localStorage.getItem(scheduleHour)
})
