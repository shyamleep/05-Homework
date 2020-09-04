$(document).ready(function(){

    var scheduleHourArray = $(".hour")
    // var scheduleTime = scheduleHour.slice(-2);
    var description = $(".description").val;
    var currentHour = moment().hour();

    console.log(scheduleHourArray)

    for (var i; i < scheduleHourArray.length; i++) {
        scheduleHour = (scheduleHourArray[i].id).slice(-2);
        console.log (scheduleHour)
    }
    
    // display current day, date, and time

    $("#currentDay").text(moment().format("dddd, MMMM do YYYY, hh:mm A"))

    // function to class description blocks
    $(".hour").click(function(){
        console.log(this.id)
    })

//     // check current time of day in hours to class description block
        
//     console.log(currentHour)
//     console.log(typeof(currentHour))

    

//     // function to read what's stored in local storage and display it


//     $(".saveBtn").on("click", function() {
//         localStorage.setItem(scheduleHour, description)

//     })

//     console.log(scheduleHour)
//     console.log(description)

//     $(".description").localStorage.getItem(scheduleHour)
})
