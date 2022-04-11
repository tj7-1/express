let day = document.getElementById("day");
const getCurrentDay = () => {
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednessday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Satday";

            let currentTime = new Date();
            days = weekday[currentTime.getDay()];
            day.innerText= days;
        };
        getCurrentDay();
    
let date = document.getElementById("date");
const getCurrentDate=()=>{
    var mon = [
        "Jan",
        "febrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
            let currentDate = new Date();
            today = currentDate.getDate();
            month = mon[currentDate.getMonth()];
            date.innerText=today +" "+ month;
        };
        getCurrentDate();



        
    