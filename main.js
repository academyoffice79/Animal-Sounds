function startclassify() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JbHXv20dX/model.json", modelReady);
}

function modelReady() {
    console.log("Model is Ready")
    classifier.classify(getResults);
}

function getResults(error, results) {
    if (error){
        console.log("Error");
        window.alert("Error");
    }
    else if(results){
        console.log(results);
        
    }
}