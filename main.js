function startclassify() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tR--tkXXM/model.json", modelReady);
}

function modelReady() {
    console.log("Model is Ready")
    classifier.classify(getResults);
}

Lion = 0;
Birds = 0;
Cow = 0;

function getResults(error, results) {
    if (error){
        console.log("Error");
        window.alert("Error");
    }
    else if(results){
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = "Detected sound of - " + results[0].label;
        document.getElementById("resultaccu").innerHTML = "Accuracy - " + Math.floor(results[0].confidence * 100).toFixed(2) + "%";

        if(results[0].label == "Cows"){
            document.getElementById("animal").src = "https://media.4-paws.org/a/3/d/e/a3dedf1152afac1328efbe919b2799b0f9b1a288/VIER%20PFOTEN_2015-04-27_010-1334x1333-600x600.jpg"
        }
        else if(results[0].label == "Lions"){
            document.getElementById("animal").src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKilling_of_Cecil_the_lion&psig=AOvVaw2zf6kW60ZyDPb3lY848l9C&ust=1651261873473000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDbooDEt_cCFQAAAAAdAAAAABAU";
        }
        else if(results[0].label == "Birds Chirping"){
            document.getElementById("animal").src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fpopular-small-bird-species-390926&psig=AOvVaw3IKTdCuVt6UKV3QdaZ0c3W&ust=1651262056376000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiXxtXEt_cCFQAAAAAdAAAAABAD";
        }
        else {
            document.getElementById("animal").src = "";
        }
}
}