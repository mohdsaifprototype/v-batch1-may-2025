$("document").ready(function () {
	$("#btn").click(function () {
		alert("Value: " + $("input").val());

		// Clear the input field after alert
		$("input").val("Saif");

		console.log("Attributes of the input field:");
		console.log("ID: " + $("input").attr("id"));
	});

	// Code for the second container
	$("#btn1").click(function () {
		$("#test1").text("Hello world!");
	});
	$("#btn2").click(function () {
		$("#test2").html("<b>Hello world!</b>");
	});
	$("#btn3").click(function () {
		$("#test3").val("Dolly Duck");
	});
});
