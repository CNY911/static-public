// create a function that displays the current date and time
function displayDateTime() {
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  var dateTime = date + " " + time;
  $("#date-time").text(dateTime);
}

// Call the function immediately
displayDateTime();

// Call the function every second
setInterval(displayDateTime, 1000);