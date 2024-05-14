// //white sin wave variables
// //coordinates for circles
// let x = 0;

import { SoundLoop } from "../p5types/index";

// // change direction
// // let x = windowWidth;

// let y = 0;
// //angle value for sin function
// let theta = 0;
// //offset to increment angle
// let thetaInc = 0.05;

// //variables to animate - offset and increment
// let offset = 0;
// // change direction
// // offset = TWO_PI;
// let offsetInc = 0.01;

// // constants for amplitude/frequency of waves and diameter of circles
// const AMP = 150;
// const FREQ = 8;
// const DIAMETER = 25;

// //red cos wave variables
// let x2 = 0;
// let y2 = 0;
// //angle value for sin function
// let theta2 = 0;
// //offset to increment angle
// let thetaInc2 = 0.05;

// //variables to animate - offset and increment
// let offset2 = 0;
// // change direction
// // offset = TWO_PI;
// let offsetInc2 = 0.01;

// // constants for amplitude/frequency of waves and diameter of circles
// const AMP2 = 150;
// const FREQ2 = 4;
// const DIAMETER2 = 50;

// //blue wave variables
// let x3 = 0;
// let y3 = 0;
// //angle value for sin function
// let theta3 = 0;
// //offset to increment angle
// let thetaInc3 = 0.05;

// //variables to animate - offset and increment
// let offset3 = 0;
// // change direction
// // offset = TWO_PI;
// let offsetInc3 = 0.01;

// // constants for amplitude/frequency of waves and diameter of circles
// const AMP3 = 150;
// const FREQ3 = 1;
// const DIAMETER3 = 50;

// let xP = 0;
// let yP = 0;

let sounde;
// function preload() {
// //   soundFormats('webm');
// //   sound = loadSound('../sound/earthhum');
// }
function preload() {
// const audio = new Audio('../sound/earthhum.webm');
// sound = loadSound('../sound/earthhum.webm');
// soundFormats('mp3');

// egbert= loadSound('earthhum.mp3');

sounde = createAudio('/earthhum.mp3');
console.log(sounde);

}



function setup() {

//   createCanvas(windowWidth, windowHeight);
//   frameRate(50);
//   //   noiseSeed(random(1000));
//   //   noiseSeed(150);
// //   audio.play();
// egbert.play();
// egbert.loop();
// sounde.loop();
}

function draw() {

    // sound.loop();
    // play();
    // sound.play();
//   background(0);

//   stroke(255, 215, 0);
//   strokeWeight(1.5);
// for (xP = 0; xP < width; xP += 0.5) {
//     yP = height * noise(xP);
//     point(xP, yP);
//     // x4 += 1;
// 0  }

//     noStroke();
//   // background(200);

//   fill(255, 255, 255, 70);
//   theta = offset;

//   // background(220);
//   while (theta < TWO_PI * FREQ + offset) {
//     y = sin(theta) * AMP;
//     // console.log(y);
//     // invert y
//     // y = -(sin(theta) * AMP);
//     circle(x, y + height / 2, DIAMETER);
//     // ellipse(x, y + height/4, DIAMETER, DIAMETER/2);
//     theta += thetaInc;
//     //offset is effectively moving the x coordinate and with background reset at beginning of draw function this will give appearance it is animating
//     x = map(theta - offset, 0, TWO_PI * FREQ, 0, width);

//     //change direction better way is below
//     // x = map(theta + offset, 0, TWO_PI * FREQ, 0, width);

//     // console.log(x);
//   }

//   //   to left
//   offset += offsetInc;
//   if (offset > TWO_PI) {
//     offset = 0;
//   }

//   //red cos wave

//   fill(255, 0, 0, 100);
//   theta2 = offset2;

//   while (theta2 < TWO_PI * FREQ2 + offset2) {
//     y2 = cos(theta2) * AMP2;
//     // console.log(y);
//     // invert y
//     // y = -(sin(theta) * AMP);
//     // circle(x, y + height/2, DIAMETER);
//     // ellipse(x2, y2 + height/4, DIAMETER2, DIAMETER2/2);
//     rect(x2, y2 + height / 2, DIAMETER2, DIAMETER2 / 2);
//     theta2 += thetaInc2;
//     //offset is effectively moving the x coordinate and with background reset at beginning of draw function this will give appearance it is animating
//     x2 = map(theta2 + offset2, 0, TWO_PI * FREQ2, 0, width);

//     //change direction better way is below
//     // x = map(theta + offset, 0, TWO_PI * FREQ, 0, width);

//     // console.log(x);
//   }
//   //   to right
//   offset2 += offsetInc2;
//   if (offset2 > TWO_PI) {
//     offset2 = 0;
//   }

//   //blue cos wave

//   fill(0, 0, 255, 70);

//   theta3 = offset3;

//   while (theta3 < TWO_PI * FREQ3 + offset3) {
//     y3 = sin(theta3) * AMP3;
//     // console.log(y);
//     // invert y
//     // y = -(sin(theta) * AMP);
//     // circle(x, y + height/2, DIAMETER);
//     ellipse(x3, y3 + height / 2, DIAMETER3, DIAMETER3 / 2);
//     theta3 += thetaInc3;
//     //offset is effectively moving the x coordinate and with background reset at beginning of draw function this will give appearance it is animating
//     x3 = map(theta3 - offset3, 0, TWO_PI * FREQ3, 0, width);

//     //change direction better way is below
//     // x = map(theta + offset, 0, TWO_PI * FREQ, 0, width);

//     // console.log(x);
//   }
//   //   to right
//   offset3 += offsetInc3;
//   if (offset3 > TWO_PI) {
//     offset3 = 0;
//   }

//   //perlin wave
//   // fill(255, 215, 0);
//   // stroke(255, 215, 0);
//   // strokeWeight(1.5);
//   // for (let x4 = 0; x4 < width; x4++){
//   //     y4 = height * noise(x4);
//   //     point(x4, y4);
//   //     // x4 += 1;
//   // }

  //the end
}
