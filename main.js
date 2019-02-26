let widthCanvas = heightCanvas = 400;
let radius = widthCanvas/2;
var count = 0;
let total = 10000;
var dentro = 0;
var output;
function setup() {
    let cnv = createCanvas(widthCanvas, heightCanvas);
    /* cnv.position(width/2, 0); */
    background(0);
    translate(radius, radius);
    stroke(255, 255, 255, 255);
    strokeWeight(4)
    noFill();
    ellipse(0, 0, widthCanvas, heightCanvas);
    rectMode(CENTER);
    rect(0,0, widthCanvas, heightCanvas);
    output = createElement("h2", "");
}

function draw() {
    if(count < total){
        count++;
        translate(radius, radius);
        getRandomPoint = () =>{
            x = random(-radius, radius)
            y = random(-radius, radius)
            //teorema di pitagora per la distanza
            distanza = sqrt(pow(x,2)+pow(y,2));
            if(distanza < radius){
                stroke(0, 255, 0);
                dentro++;
            } else {
                stroke(255, 0, 0);
            }
            point(x, y);
        }
        getRandomPoint();
        myPi = 4 * (float(dentro)/count);
        output.html(myPi)
    }
}
