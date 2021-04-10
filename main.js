function preload() {
}

function setup() {
canvas=createCanvas(765.789,789.765)
canvas.position(325,350)
video=createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dEQiXqdZF/model.json',modelloaded)
}

function draw() {
image(video,0,0,765.789,789.765)
classifier.classify(video,gotresult)
}

function modelloaded(){

    console.log("model loaded");

}

function gotresult(err, results) {
    if (err) {
        console.error(err);
    }
    else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}