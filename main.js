const widthCanvas = heightCanvas = 500;
const radius = widthCanvas/2;
const data = {
    count : 0,
    total : null,
    dentro : 0
}
var output;
condizioniIniziali = () => {
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
    if(data.count < data.total && data.total != null){
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
                data.dentro++;
            } else {
                //rosso
                stroke(255, 0, 0);
            }
            strokeWeight(1)
            point(x, y);
        }

        for(c = 0; c<=2500; c++){
            if(data.count < data.total){
                data.count++;
                getRandomPoint();
                myPi = 4 * (data.dentro/data.count);
                output.html(myPi);
            }
            else{
                break;
            }
        }
    }
    else if(data.total === null){
        //jquery per il recupero dati
        let inputBox = $("#n");
        let submitButton = $("#submitButton");
        submitButton.click(function(){
            data.total = !isNaN(inputBox.val()) ? inputBox.val() : location.reload();
            submitButton.hide();
        });
    }
    //reset
    var resetButton = $("#resetButton");
    resetButton.click(function(){location.reload();});
}