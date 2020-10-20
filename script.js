const pads = [
  "Q", "W", "E",
  "A", "S", "D",
  "Z", "X", "C",
];

const padDescriptions = {
  Q: "Bass 1", W: "Bass 2", E: "Kick 1",
  A: "Snare 1", S: "Snare 2", D: "Kick 2",
  Z: "Crash 1", X: "Crash 2", C: "Kick 3"
}

/** Register jQuery Event Listeners **/
for(let i = 0; i < pads.length; i++) {
  var padId = "button-" + pads[i];
  $("#" + padId).click(padClicked);
}
$(document).on("keypress", keyPressed);


/** jQuery Event Listeners Callback Functions **/
function keyPressed(e) {
  var key = e.key.toUpperCase();
  var padId = "button-" + key;
  var pad = $("#" + padId);
  if(pad.length < 1) {
    console.log("Pad '" + padId + "' not found.");
    return;
  }
  
  var audio = $("#" + key);
  if(audio.length < 1) {
    console.log("Audio '" + key + "' not found.");
    return;
  }
  
  playPad(pad, audio[0]);
}

function padClicked() {
  var pad = $(this);
  var id = pad.attr("id");
  var key = id.slice(7, 8);
  
  var audio = $("#" + key);
  if(audio.length < 1) {
    console.log("Audio '" + key + "' not found.");
    return;
  }
  
  playPad(pad, audio[0]);
}

/** Other functions **/
function playPad(pad, audio) {
  console.log("Playing Pad '" + pad.attr("id") + "'")
  audio.play();
  console.log(audio);
  
  var key = pad.attr("id").slice(7, 8);
  var desc = padDescriptions[key];
  $("#display").text(desc);
}