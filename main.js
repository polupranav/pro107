function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qjxijx6sR/model.json', modelReady);

}
function modelReady() {
    classifier.classify(gotresults);
}

function gotresults() {
    
}