let count = 0;
function bgChange() {
  document.body.style.backgroundColor = "#caba";
  document.body.append(`<div>Event fired ${count++}!</div>`);
}
