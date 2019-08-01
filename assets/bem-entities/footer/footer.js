// Footer Copyright Date IIFE:
( function() {
  
  var thisYear = new Date().getFullYear();  
  var currentYearSpan = document.getElementsByClassName('currentYear');
  var copyrightText = '&ndash;&nbsp;' + thisYear + '&nbsp;';

  for (var i = 0; i < currentYearSpan.length; i++) {
    currentYearSpan[i].innerHTML = copyrightText;
  }
  
}) ();