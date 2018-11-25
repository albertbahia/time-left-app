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

      $("#meet-time-value").text(dayNames[meetDdName] + " " + monthNames[meetMm] + " " + meetDd + ", " + meetYear + " - " + meetHh + ":" + meetMins + ":" + meetSs);
      
      $("#current-time-value").text(dayNames[ddName] + " " + monthNames[mm] +  " " + dd + ", " + YYYY + " - " +  hh + ":" + mins + ":" + ss);

      $("#time-left-value").text((meetDd - dd) + " Days " + (hh-meetHh) + " Hours " + (60-mins) + " Minutes " + (60-ss) + " Seconds ");
      

      // Restart timer
      setTimeout(startTime, 1000);

   };

   // Invoke function
   startTime();
   
});