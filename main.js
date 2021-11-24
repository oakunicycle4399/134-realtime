objectDetector= "";

img = "";
objects = [];
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');

}
function draw() {
    image(video, 0, 0, 380, 380);
    if (status != "") {
        r=random(255);
        r = 255;
        g = 255;
        b = 255;
         objectDetector.detect(video,gotResult);
        for (i = 0; i > objects.length; i++) {
            document.getElementById("status").innerHTML = "status: objects";
            document.getElementById("name_of_object").innerHTML = "number of object detect are :"+objects.length;
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, object[i].y);
            nofill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }


    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("FF0000");
    rect(300, 90, 270, 320);


}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "States : Dectcting Objects";
    console.log("Calling Model");
}
function modelLoaded() {
   
    states = true;
    console.log("model Loaded!");
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}