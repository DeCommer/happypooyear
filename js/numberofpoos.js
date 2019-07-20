document.getElementById("numopoo").innerHTML = "147";

var text = ["January"];
var counter = 0;
var elem = document.getElementById("hpy-text-1");
var inst = setInterval(change, 4000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst);
  }
}