let widthCanvas = heightCanvas = 500;
let radius = widthCanvas/2;
var count = 0;
var total = null;
var dentro = 0;
var output;
condizioniIniziali =()=>{
    background(0);
    translate(radius, radius);
    stroke(255, 255, 255, 255);
    strokeWeight(4)
    noFill();
    ellipse(0, 0, widthCanvas, heightCanvas);
    rectMode(CENTER);
    rect(0,0, widthCanvas, heightCanvas);
}
function setup() {
    createCanvas(widthCanvas, heightCanvas);
    condizioniIniziali();
    output = createElement("h2", "");
}

function draw() {
    if(count < total && total != null){
        //traslazione dei punti
        translate(radius, radius);

        getRandomPoint = () =>{
            x = random(-radius, radius)
            y = random(-radius, radius)
            //teorema di pitagora per la distanza
            distanza = sqrt(pow(x, 2)+pow(y, 2));
            if(distanza < radius){
                //verde
                stroke(0, 255, 0);
                dentro++;
            } else {
                //rosso
                stroke(255, 0, 0);
            }
            strokeWeight(1)
            point(x, y);
        }

        for(c = 0; c<=2500; c++){
            if(count < total){
                count++;
                getRandomPoint();
                myPi = 4 * (dentro/count);
                output.html(myPi);
            }
            else{
                break;
            }
        }
    }
    else if(total === null){
        //jquery per il recupero dati
        var form = $("#inputForm");
        var inputBox = $("#n");
        var submitButton = $("#submitButton");
        submitButton.click(function(){
            total = $("#n").val();
        });
    }
    //reset
    var resetButton = $("#resetButton");
    resetButton.click(function(){ location.reload();});
}