function preload(){

}
function setup(){
    video = createCapture(VIDEO)
    video.size(400,300)
    video.position(40,160)
    canvas = createCanvas(500,400) ;
    canvas.position(820,160);

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("pN on")
}
function draw(){
    
    background("white")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}