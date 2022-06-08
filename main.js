img = "";
status = "";
objects = [];
function preload(){}
function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Detecting object...';
}
function modelLoaded(){
    console.log('CocoSSD Model Loaded!');
    status = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);0
    } else{
        console.log(results);
    }
}
function draw(){
    image(video, 0, 0, 600, 450);
}