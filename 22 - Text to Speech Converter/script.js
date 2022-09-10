 const textArea = document.querySelector("textarea");
 const voiceList = document.querySelector("select");
 const speechBtn = document.querySelector("button");

 let synth = speechSynthesis;
 let isSpeaking = true;

 const voices = () => {
    for(let voice of synth.getVoices()){
        // console.log(voice);

        // selecting "Google US English" voice as default
        let selected = voice.name === "Google US English" ? "selected" : "";

        // creating an option tag with passing voice name voice language
        let option = 
        `
        <option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>
        `
        // inserting option tag beforeend of speech tag
        voiceList.insertAdjacentHTML("beforeend", option);
    }
 }

 synth.addEventListener("voiceschanged", voices)

const textToSpeech = (text) =>{

     console.log("textToSpeech")
    let utterance = new SpeechSynthesisUtterance(text);

    for(let voice of synth.getVoices()){
        // if the available device voice name is equal to the user selected voice
        // tehn set teh speech voice to the user selected voice
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    // speack the speech in storing utterances variable
    speechSynthesis.speak(utterance);
}


 speechBtn.addEventListener("click", e =>{
    e.preventDefault();


    if(textArea.value != ""){
        // speaking property return the true boolean value
        // if the speech is in the process of being spoken.
        if(!synth.speaking){
            textToSpeech(textArea.value);
        }
        
        if(textArea.value.length > 20){
            // if isSpeaking is true then change it's value to false and reume the utterance
            // else change it's value to true and pause the speech
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "PAUSE SPEECH";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "RESUME SPEECH";
            }

            setInterval(() =>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = "TEXT TO SPEECH";
                }
            });
        }
    }
 });