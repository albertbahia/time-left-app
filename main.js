$( document ).ready(function() {

   // -----------------------
   // Constants
   // -----------------------
   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];

   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   // -----------------------

   // -----------------------
   // Started Talking Time Variables
   // -----------------------
   let startedDate = new Date('October 5, 2018 17:00:00'); //---Get the exact time from Amy
   let startedDd = startedDate.getDate();
   let startedDdName = startedDate.getDay();
   let startedMm = startedDate.getMonth();
   let twelveHourFormatStarted;
   let startedHh = startedDate.getHours();
   if (startedHh > 12) {
      startedHh = startedHh - 12;
      twelveHourFormatStarted = "PM";
   } else if (startedHh <= 12) {
      twelveHourFormatStarted = "AM";
   }
   let startedYear = startedDate.getFullYear();
   let startedMins = startedDate.getMinutes();
   let startedSs = startedDate.getSeconds();
   if (startedMins < 10) {
      startedMins = "0" + startedMins;
   }
   if (startedSs < 10) {
      startedSs = "0" + startedSs;
   }
   // 
   
   // -----------------------
   // Meet Time Variables
   // -----------------------
   let meetDate = new Date('November 30, 2018 22:00:00');
   let meetDd = meetDate.getDate();
   let meetDdName = meetDate.getDay();
   let meetMm = meetDate.getMonth();
   let meetHh = meetDate.getHours();
   let meetYear = meetDate.getFullYear();
   let meetMins = meetDate.getMinutes();
   let meetSs = meetDate.getSeconds();
   if (meetMins < 10) {
      meetMins = "0" + meetMins;
   }
   if (meetSs < 10) {
      meetSs = "0" + meetSs;
   }
   // -----------------------

   function startTime() {
      // -----------------------
      // Start Time Variables
      // -----------------------
      let today = new Date();
      let dd = today.getDate();
      let ddName = today.getDay();
      let mm = today.getMonth();
      let hh = today.getHours()
      let YYYY = today.getFullYear();
      let mins = today.getMinutes();
      let ss = today.getSeconds();
      if (mins < 10) {
         mins = "0" + mins;
      }
      if (ss < 10) {
         ss = "0" + ss;
      }
      // -----------------------

      // console.log("---------");
      // console.log("Current Date Value: " + dd);
      // console.log("Current Month Value: " + mm);
      // console.log("Current Hours Value: " + hh );
      // console.log("Year Value: " + YYYY);
      // console.log("Minutes Value:" + mins);
      // console.log("Seconds Value: " + ss);
      // console.log(today);
      
      // console.log(meetDate);
      // console.log("Meet Date Value: " + meetDd);
      // console.log("Meet Month Value: " + meetMm);
      // console.log("Meet Hour Value: " + meetHh);
      // console.log(meetMins);
      // console.log(meetSs);
      // console.log("---------");

      // -----------------------
      // Time Difference Calculations
      // -----------------------
      let difference = meetDate.getTime() - today.getTime();
      let seconds = Math.floor(difference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;
      // -----------------------

      $("#started-talking-time-value").text(dayNames[startedDdName] + " " + monthNames[startedMm] + " " + startedDd + ", " + startedYear + " - " + startedHh + ":" + startedMins + ":" + startedSs + " " + twelveHourFormatStarted);

      $("#meet-time-value").text(dayNames[meetDdName] + " " + monthNames[meetMm] + " " + meetDd + ", " + meetYear + " - " + meetHh + ":" + meetMins + ":" + meetSs);
      
      $("#current-time-value").text(dayNames[ddName] + " " + monthNames[mm] +  " " + dd + ", " + YYYY + " - " +  hh + ":" + mins + ":" + ss);

      $("#time-left-value").text(days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ");
      

      // Restart timer
      setTimeout(startTime, 1000);

   };

   // Invoke function
   startTime();
   
});