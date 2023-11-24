let clipIndex = 1
let isEasyRead = false;
let audioEnabled = false;
let activeAudio = null;
let activeVideo = null;

function changeDisplayState(element, makeVisible) {
    element.style.display = "None";
    if (makeVisible)
        element.style.display = "inline-block";
}

function getTranslationElement(index) {
    let elementName = "translation"+index;
    let elements = document.getElementsByName(elementName);
    return elements[0]
}

function getVideoElement(element) {
    return element.querySelector("video");
}

function playAudio(parentElement) {
    if (audioEnabled) {
            if (isEasyRead) {
            let audioElement = parentElement.querySelector("audio.simpleenglish");
            console.log("playing " + audioElement);
            activeAudio = audioElement;
            audioElement.play();
            return;
        }
        else {
            let audioElement = parentElement.querySelector("audio.standardenglish");
            console.log("playing " + audioElement);
            activeAudio = audioElement;
            audioElement.play();
            return;
        }
    }
}

function playClip(){
    stopAllAudio();
    for (let i = 1; i <= 12; i++) {
        let element = getTranslationElement(i);
        changeDisplayState(element, (i == clipIndex));
        let vid = getVideoElement(element);
        vid.pause();
        vid.currentTime = 0;
        vid.play();
        if (i == clipIndex) {
            playAudio(element);
        }
    }
}

function showOnlyTranslation(toShow) {
    // First check to see if the requested element is already active
    let element = getTranslationElement(toShow);
    if (element == null) {
        return;
    }
    if (element.style.display == "inline-block") {
        return;
    }
    clipIndex=toShow;
    playClip();
}

function changeDef(event, translationId){
    stopAllAudio();
    showOnlyTranslation(translationId);
}

function navigateClip(){
    stopAllAudio();
    if (clipIndex < 1) {
      clipIndex = 1;
    }
    if (clipIndex > 12) {
      clipIndex = 12;
    }
    showOnlyTranslation(clipIndex);
}

function previousClip(){
    clipIndex--;
    navigateClip();
}

function nextClip(){
    clipIndex++;
    navigateClip();
}

function replayClip(){
    playClip();
}

function stopAudio(tag) {
    if (activeAudio != null) {
        activeAudio.currentTime = 0;
        activeAudio.pause();
    }
    let elements = document.querySelector(tag);
    if (elements == null) {
        return;
    }
    Array.from(elements).forEach(e => {
        e.currentTime = 0;
        e.pause();
    });
}

function stopAllAudio() {
    stopAudio("audio.standardenglish");
    stopAudio("audio.simpleenglish");
    stopAudio("standardenglish");
    stopAudio("simpleenglish");
}

function toggleAudio() {
    stopAllAudio();
    audioEnabled = !audioEnabled;
    for (let i=0; i <= 12; i++) {
        if (audioEnabled) {
            let parentElement = getTranslationElement(clipIndex);
            playAudio(parentElement);
        }
    }
}

function toggleEasyRead(){
    isEasyRead = !isEasyRead;
    if (isEasyRead){
        // turn off "engb"
        let elements = document.getElementsByClassName("engb");
        Array.from(elements).forEach(e => {
            changeDisplayState(e, false);
        });
        // turn on "engbsimple"
        elements = document.getElementsByClassName("engbsimple");
        Array.from(elements).forEach(e => {
            changeDisplayState(e, true);
        });
    }
    else {
        // turn off "engbsimple"
        let elements = document.getElementsByClassName("engbsimple");
        Array.from(elements).forEach(e => {
            changeDisplayState(e, false);
        });
        // turn on "engb"
        elements = document.getElementsByClassName("engb");
        Array.from(elements).forEach(e => {
            changeDisplayState(e, true);
        });
    }
  }

playClip();
  