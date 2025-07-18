function creteCard(imgId, cardTitle, cardText) {
	return `
	<div class="card">
		<img class="card-img" src="https://picsum.photos/id/${imgId}/300/200" alt="picsum image-${imgId || 320}">
		<h4 class="card-title">${cardTitle || "This is the card title"}</h4>
		<p class="card-text">${cardText || "This is the card text"}</p>
	</div>
	`;
}

$("document").ready(function () {
	$("#btn").click(function () {
		const id = $("#id").val();
		const title = $("#title").val();
		const body = $("#body").val();
		$("#output").prepend(creteCard(id, title, body));
	});
});
