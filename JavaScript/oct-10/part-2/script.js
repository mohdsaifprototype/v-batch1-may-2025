$(document).ready(function () {
  $("main").css("min-height", `calc(100vh - ${$("header").outerHeight(true)}px - ${$("footer").outerHeight(true)}px)`);


  $("#radius").on("input", function () {
    let radius = $(this).val();
    let area = Math.PI * radius * radius;
    $("#result").text(`The area of circle with radius ${radius} is ${area.toFixed(2)} unit squares.`);

    $("#circle").css("width", `${radius * 2}mm`);
    $("#circle").css("height", `${radius * 2}mm`);
  });
})

