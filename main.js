$( document ).ready(function() {

   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];

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

      // -----------------------
      // Meet Time Variables
      // -----------------------
      let meetDate = new Date('November 30, 2018 22:00:00');
      let meetDd = meetDate.getDay();
      let meetMm = meetDate.getMonth();
      let meetHh = meetDate.getHours();
      let meetMins = meetDate.getMinutes();
      let meetSs = meetDate.getSeconds();
      // -----------------------


      
      // console.log("Date Value: " + dd);
      // console.log("Month Value: " + mm);
      // console.log("Hours Value: " + hh );
      // console.log("Year Value: " + YYYY);
      // console.log("Minutes Value:" + mins);
      // console.log("Seconds Value: " + ss);
      // console.log(today);
      
      console.log(meetDate);
      console.log(meetDd);
      console.log(meetMm);
      console.log(meetHh);
      console.log(meetMins);
      console.log(meetSs);
      
      $("#time-left-value").text(monthNames[mm] +  " " + dd + ", " + YYYY + ": " +  hh + ":" + mins + ":" + ss);

      setTimeout(startTime, 1000);

   };

   startTime();
   
});