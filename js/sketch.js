//global variables

//creature1
//body
// //x y coordinates
let recX = 50;
let recY = 50;
//width and height
const recWidth = 100;
const recHeight = 25;
//head
// let triX1 = recX + recWidth;
// let triY1 = recY;
// let triX2 = triX1 + recWidth;
// let triY2 = triY1 + recHeight;
// let triX3 = triX1;
// let triY3 = triY1 + recHeight; 

// let ntriX1 = triX1;
// let ntriY1 = triY1;
// let ntriX2 = triX2;
// let ntriY2 = triY2 - recHeight;
// let ntriX3 = triX3;
// let ntriY3 = triY3;

// let triX1 = 25;
// let triY1 = 5;
// let triX2 = 20;
// let triY2 = 15;
// let triX3 = 25;
// let triY3 = 5; 

// let ntriX1 = 25;
// let ntriY1 = 5;
// let ntriX2 = 20;
// let ntriY2 = 5;
// let ntriX3 = 25;
// let ntriY3 = 5;

let theta = 0;
//offset to increment angle
let thetaInc = 0.05;

// //variables to animate - offset and increment
let offset = 0;
let offsetInc = 0.01;


// // constants for amplitude/frequency of waves and diameter of circles
const AMP = 200;
const FREQ = 1;
const DIAMETER = 50;



function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(0);
    noStroke();
    noLoop();

}
function draw() {

    // let recX = 50;
    // let recY = 50;
    //width and height
    // const recWidth = 100;
    // const recHeight = 25;
    //head
    let triX1 = recX + recWidth;
    let triY1 = recY;
    let triX2 = triX1 + recWidth;
    let triY2 = triY1 + recHeight;
    let triX3 = triX1;
    let triY3 = triY1 + recHeight; 
    
    let ntriX1 = triX1;
    let ntriY1 = triY1;
    let ntriX2 = triX2;
    let ntriY2 = triY2 - recHeight;
    let ntriX3 = triX3;
    let ntriY3 = triY3;
    
    background(0);

    fill(255, 255, 255, 70);
    while (theta < (TWO_PI * FREQ) + offset){
        recY = sin(theta) * AMP;

    rect(recX, recY, recWidth, recHeight);
    // fill(255, 255, 255);
    triangle(triX1, triY1, triX2, triY2, triX3, triY3);

    triangle(ntriX1, ntriY1, ntriX2, ntriY2, ntriX3, ntriY3);
    theta += thetaInc;
    recX = map(theta - offset, 0, TWO_PI * FREQ, 0, width);

}
offset -= offsetInc;
if(offset > TWO_PI){
  offset = 0;
}
}
