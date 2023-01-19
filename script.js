// // BONUS
// // ! NB Chrome retrieves voices asynchronously
// let voices = []
//
// // the speechSynthesis.getVoices() array starts off empty when page is first loaded.
// // The web speech API at some point populates this. When it's updated (async), the event voiceschanged fires.
// // we're hooking it to that event to retrieve list of voices.
// speechSynthesis.onvoiceschanged = function () {
//     voices = speechSynthesis.getVoices()
//     console.log(voices) // toggle this to show available voices.
// }

// query the page for elements
let textArea = document.querySelector("textarea");
let playButton = document.querySelector("button");
let pitchBar = document.querySelector("input");
let duckFigure = document.querySelector("figure");

playButton.addEventListener("click", onButtonClick);
function onButtonClick() {
  if (textArea.value.length > 0) {
    speak();
  }
}
function speak() {
  let text = textArea.value;
  let pitch = pitchBar.value;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = pitch;
  speechSynthesis.speak(utterance);

  utterance.addEventListener("start", function () {
    textArea.disabled = true;
    pitchBar.disabled = true;
    playButton.disabled = true;
    duckFigure.classList.add("talking");
  });

  utterance.addEventListener("end", function () {
    textArea.disabled = false;
    pitchBar.disabled = false;
    playButton.disabled = false;
    duckFigure.classList.remove("talking");
  });
}
