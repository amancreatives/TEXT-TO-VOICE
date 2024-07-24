let speech = new SpeechSynthesisUtterance();

let voiceChange = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voiceChange = window.speechSynthesis.getVoices();
    speech.voice = voiceChange[0];


    voiceChange.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change",() =>{
    speech.voice = voiceChange[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});