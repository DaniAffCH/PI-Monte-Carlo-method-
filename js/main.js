const widthCanvas = heightCanvas = 500;
const radius = widthCanvas / 2;
const multiplier = 100;
const data = {
    count: 0,
    total: null,
    dentro: 0
}
var output;

function setup() {
    createCanvas(widthCanvas, heightCanvas);
    background(31, 40, 51);
    translate(radius, radius);
    stroke(255, 255, 255, 255);
    strokeWeight(4)
    noFill();
    ellipse(0, 0, widthCanvas, heightCanvas);
    rectMode(CENTER);
    rect(0, 0, widthCanvas, heightCanvas);
    output = createElement("h2", "");
    $("#resetButton").hide();
}

function stopall(e) {
    alert("Errore: " + e);
    throw new Error(e);
}

function draw() {

    if (data.total === null) {
        //jquery per il recupero dati
        let inputBox = $("#n");
        let submitButton = $("#submitButton");
        submitButton.click(function() {
            data.total = !isNaN(inputBox.val()) ? inputBox.val() * multiplier : location.reload();
            if (data.total < 10000) {
                data.total = null;
                stopall("Inserisci un valore di almeno 100");
            }
            $("#resetButton").show();
            submitButton.hide();
        });
    } else if (data.count < data.total && data.total != null) {
        //traslazione dei punti
        translate(radius, radius);

        getRandomPoint = (count) => {
            x = random(-radius, radius)
            y = random(-radius, radius)
                //teorema di pitagora per la distanza
            distanza = sqrt(pow(x, 2) + pow(y, 2));
            if (distanza < radius) {
                //verde
                stroke(0, 255, 0);
                data.dentro++;
            } else {
                //rosso
                stroke(255, 0, 0);
            }
            strokeWeight(2);
            if (count % multiplier == 0) {
                point(x, y);
            }
        }

        for (c = 0; c <= 2500; c++) {
            if (data.count < data.total) {
                data.count++;
                getRandomPoint(data.count);
                myPi = 4 * (data.dentro / data.count);
                output.html(myPi);
            } else {
                break;
            }
        }
    }
    //reset
    $("#resetButton").click(function() { location.reload(); });
}