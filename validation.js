$(document).ready(function () {
  $("#flexSwitchCheckDefault").click(function () {
    if (!$(this).is(":checked")) {
      $(".table").removeClass("table-dark");
    }
    if (!$(this).is(":checked")) {
      $("a").css("color", "black");
    }
    if ($(this).is(":checked")) {
      $(".table").addClass("table-dark");
    }
    if ($(this).is(":checked")) {
      $("a").css("color", "white");
    }
  });
});
