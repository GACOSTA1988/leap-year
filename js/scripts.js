$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    // BUSINESS LOGIC
    var leapYear = function(year) {
      if ((year % 100!==0) && (year % 4===0)) {
        return true;
      } else {
        return false;
      }
    };
    // USER INTERFACE LOGIC
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    // $("#result").text(result);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
      } else {
        $(".not").text("");
      }
      $("#result").show();

  });
});
