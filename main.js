rightWrist=0;
leftWrist=0;
getDifference=0;


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
    fill("black")
    Text("oi",getDifference)
    document.getElementById("status").innerHTML = "lados do quadrado são:"+getDifference+"px"
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        leftWrist=results[0].pose.leftWrist.x
        rightWrist=results[0].pose.rightWrist.x
        getDifference=floor(leftWrist-rightWrist)
    }
}