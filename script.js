let talk = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = ()=> {
    voices = window.speechSynthesis.getVoices();  // the get voice provided all voice on the device or laptop
    talk.voice = voices[0];  // the first voice in the device can speak
// console.log(voices);
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));   // loop through. 
};
    // change the voice which you want  to use for speaking by selecting from dropdown menu
voiceSelect.addEventListener("change",()=>{
    talk.voice = voices[voiceSelect.value];
    
});
document.querySelector("button").addEventListener("click",() =>{
talk.text = document.querySelector("textarea").value;
// console.log(talk.text);
window.speechSynthesis.speak(talk);

});