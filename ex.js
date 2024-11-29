// Open a new window to cloud.oracle.com
var newWindow = window.open('https://www.example.com '_blank');

// Set an interval to refresh the page every 5 seconds
setInterval(function() {
  newWindow.location.reload();
}, 5000);
