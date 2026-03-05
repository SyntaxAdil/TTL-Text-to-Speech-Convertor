const textInput = document.getElementById("text-input");
const listenBtn = document.getElementById("listen-btn");
const fsPlusBtn = document.getElementById("plus-btn");
const fsMinusBtn = document.getElementById("minus-btn");
const speech = new SpeechSynthesisUtterance();
let fs = 16;
listenBtn.addEventListener("click", (e) => {
  const textVal = textInput.value.trim();
  speech.text = textVal;
  window.speechSynthesis.speak(speech);
});

fsMinusBtn.addEventListener("click", (e) => {
  if (fs < 16) {
    makeBtnDisabled(fsMinusBtn);
    return;
  } else {
    removeBtnDisabled(fsMinusBtn);
  }

  fs--;
  removeBtnDisabled(fsPlusBtn);

  changeStyle(fs);
  updateFsCount();
});
fsPlusBtn.addEventListener("click", (e) => {
  if (fs > 30) {
    makeBtnDisabled(fsPlusBtn);
    return;
  } else {
    removeBtnDisabled(fsPlusBtn);
  }

  fs++;
  removeBtnDisabled(fsMinusBtn);

  changeStyle(fs);
  updateFsCount();
});
function updateFsCount() {
  document.getElementById("fs").innerHTML = `Font Size: <span class="text-purple-500 ">${fs}px<span/>`;
}
function changeStyle(px) {
  textInput.style.fontSize = `${px}px`;
}

function makeBtnDisabled(btn) {
  btn.setAttribute("disabled", true);
}
function removeBtnDisabled(btn) {
  btn.removeAttribute("disabled");
}
changeStyle(16);
updateFsCount()