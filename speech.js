const textInput = document.getElementById("text-input");
const listenBtn = document.getElementById("listen-btn");
const speech = new SpeechSynthesisUtterance();

listenBtn.addEventListener("click", (e) => {
  const textVal = textInput.value.trim();
  speech.text = textVal;
  window.speechSynthesis.speak(speech);
    
});
