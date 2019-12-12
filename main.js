$( document ).ready(function() {
	 // ** Meet time timestamp is on Line 82**
   
	 // -----------------------
   // Constants
   // -----------------------
   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];

   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   // -----------------------

   // -----------------------
   // Officially Together Time Variables
   // -----------------------
   let officialDate = new Date('November 11, 2018 01:00:00'); //---Get the exact time from Amy
   let officialDd = officialDate.getDate();
   let officialDdName = officialDate.getDay();
   let officialMm = officialDate.getMonth();
   let officialHh = officialDate.getHours();
   // -----------------------
   // 12-hour clock format for Officialy Together Time 
   // TODO:  Needs to be refactored with the other timestamp values so only one function does this.
   // -----------------------
   let twelveHourFormatOfficial;
   if (officialHh === 12) {
      officialHh = officialHh - 0;
      twelveHourFormatOfficial = "PM";
   } else if (officialHh >= 12) {
	 		officialHh = officialHh - 12;
			twelveHourFormatOfficial = "PM";
	 } else if (officialHh < 12) {
      twelveHourFormatOfficial = "AM";
   }
   // -----------------------
   let officialYear = officialDate.getFullYear();
   let officialMins = officialDate.getMinutes();
   let officialSs = officialDate.getSeconds();
   if (officialMins < 10) {
      officialMins = "0" + officialMins;
   }
   if (officialSs < 10) {
      officialSs = "0" + officialSs;
   }
   // -----------------------

   // -----------------------
   // Started Talking Time Variables
   // -----------------------
   let startedDate = new Date('October 5, 2018 17:00:00'); //---Get the exact time from Amy
   let startedDd = startedDate.getDate();
   let startedDdName = startedDate.getDay();
   let startedMm = startedDate.getMonth();
   let startedHh = startedDate.getHours();
   // -----------------------
   // 12-hour clock format for Started Talking Time 
   // TODO:  Needs to be refactored with the other timestamp values so only one function does this.
   // -----------------------
   let twelveHourFormatStarted;
   if (startedHh > 12) {
      startedHh = startedHh - 12;
      twelveHourFormatStarted = "PM";
   } else if (startedHh <= 12) {
      twelveHourFormatStarted = "AM";
   }
   // -----------------------
   let startedYear = startedDate.getFullYear();
   let startedMins = startedDate.getMinutes();
   let startedSs = startedDate.getSeconds();
   if (startedMins < 10) {
      startedMins = "0" + startedMins;
   }
   if (startedSs < 10) {
      startedSs = "0" + startedSs;
   }
   // -----------------------
   
   // -----------------------
   // Meet Time Variables
   // -----------------------
   let meetDate = new Date('December 12, 2019 19:30:00');
   let meetDd = meetDate.getDate();
   let meetDdName = meetDate.getDay();
   let meetMm = meetDate.getMonth();
   let meetHh = meetDate.getHours();
   // -----------------------
   // 12-hour clock format for Next Time To Meet 
   // TODO:  Needs to be refactored with the other timestamp values so only one function does this.
   // -----------------------
   let twelveHourFormatMeet;
   if (meetHh > 12) {
      meetHh = meetHh - 12;
      twelveHourFormatMeet = "PM";
   } else if (meetHh <= 12) {
      twelveHourFormatMeet = "AM";
   }
   // -----------------------
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
      let hh = today.getHours();
      // -----------------------
      // 12-hour clock format for Current Time
      // TODO:  Needs to be refactored with the other timestamp values so only one function does this.
      // -----------------------
      let twelveHourFormatCurrent;
      if (hh === 12) {
				hh = hh - 0;
				twelveHourFormatCurrent = "PM";
			} else if (hh >= 12) {
         hh = hh - 12;
         twelveHourFormatCurrent = "PM";
      } else if (hh < 12) {
         twelveHourFormatCurrent = "AM";
      }
      // -----------------------
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

      // -----------------------
      // Officially Together Total Calculations
      // -----------------------
      let sum  = -1 * (startedDate.getTime() - today.getTime());
      let secondsStarted = Math.floor(sum / 1000);
      let minutesStarted = Math.floor(secondsStarted / 60);
      let hoursStarted = Math.floor(minutesStarted / 60);
      let daysStarted = Math.floor(hoursStarted / 24);
			let monthsStarted = Math.floor(daysStarted / 30);
			
			daysStarted %= 30;
      hoursStarted %= 24;
      minutesStarted %= 60;
      secondsStarted %= 60;
      // -----------------------

      $("#officially-together-time-value").text(dayNames[startedDdName] + " " + monthNames[startedMm] + " " + startedDd + ", " + startedYear + " - " + startedHh + ":" + startedMins + ":" + startedSs + " " + twelveHourFormatStarted);

      $("#started-talking-time-value").text(dayNames[startedDdName] + " " + monthNames[startedMm] + " " + startedDd + ", " + startedYear);

      $("#meet-time-value").text(dayNames[meetDdName] + " " + monthNames[meetMm] + " " + meetDd + ", " + meetYear);
      
      $("#current-time-value").text(dayNames[ddName] + " " + monthNames[mm] +  " " + dd + ", " + YYYY + " - " +  hh + ":" + mins + ":" + ss + " " + twelveHourFormatCurrent);

      // $("#time-left-value").text(days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ");

      // -----------------------
      // Display Next Time To Meet Calculations
      // -----------------------
      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
      // -----------------------

      // -----------------------
      // Display Time Officially Together Calculations
      // -----------------------
			$("#months-official").text(monthsStarted);
      $("#days-official").text(daysStarted);
      $("#hours-official").text(hoursStarted);
      $("#minutes-official").text(minutesStarted);
      $("#seconds-official").text(secondsStarted);
      // -----------------------
      

      // Restart timer
      setTimeout(startTime, 1000);

   };

   // Invoke function
   startTime();
   
});
