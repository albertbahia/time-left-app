$( document ).ready(function() {

   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];
   
   // -----------------------
   // Meet Time Variables
   // -----------------------
   let meetDate = new Date('November 30, 2018 22:00:00');
   let meetDd = meetDate.getDate();
   let meetMm = meetDate.getMonth();
   let meetHh = meetDate.getHours();
   let meetMins = meetDate.getMinutes();
   let meetSs = meetDate.getSeconds();
   // -----------------------

   $("#meet-time-value").text(meetDate);

   function startTime() {
      // -----------------------
      // Start Time Variables
      // -----------------------
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth();
      let hh = today.getHours()
      let YYYY = today.getFullYear();
      let mins = today.getMinutes();
      let ss = today.getSeconds();
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
      
      $("#current-time-value").text(monthNames[mm] +  " " + dd + ", " + YYYY + ": " +  hh + ":" + mins + ":" + ss);

      $("#time-left-value").text((meetDd - dd) + " Days " + (meetHh-hh) + " Hours ");
      

      setTimeout(startTime, 1000);

   };

   startTime();
   
});