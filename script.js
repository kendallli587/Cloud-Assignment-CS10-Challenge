// Basic Canvas Variables
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables for HTML Elements
let cloudImgEl = document.getElementById("cloud-img");
let frameSelectEl = document.getElementById("frameSelector");
let resetBtnEl = document.getElementById("resetBtn");
let submitBtnEl = document.getElementById("submitBtn")


// Basic Variables for animation
let cloudOneValue = 100;
let cloudTwoValue = 250;
let frameCount = 0;
let gSunValue = 0;
let radius = 65;
let yValue = 450;
let bSkyValue = 100;
let rGrassValue = 100;
let gGrassValue = 240;
let bGrassValue = 65;

// Blue Sky (Top Rectangle)
ctx.fillStyle = "rgb(0, 0, " + bSkyValue + ")";
ctx.fillRect(0, 0, 800, 450);

// Green Ground (bottom rect.)
ctx.fillStyle = "rgb(" + rGrassValue + ", " + gGrassValue + ", " + bGrassValue + ")";

ctx.fillRect(0, 450, 800, 150)

requestAnimationFrame(loop);

// Animation
function loop() {
    if (frameCount > 0 && frameCount < 300) {
        // Update Sky Color (becoming lighter)
        bSkyValue += 1;
        ctx.fillStyle = "rgb(0, 0, " + bSkyValue + ")";
        ctx.fillRect(0, 0, 800, 450);

        // Red Sunrise
        ctx.fillStyle = "rgb(255, " + gSunValue + ", 0)";
        ctx.beginPath();
        ctx.arc(400, 450, 65, Math.PI, 0) 
        ctx.fill();

        // Still Clouds before 300 frames
        ctx.drawImage(cloudImgEl, 100, 150, 150, 100);
        ctx.drawImage(cloudImgEl, 250, 100, 150, 100);
    }

    // Update Variables
    frameCount++;

    if (frameCount > 300 && frameCount < 550){
        // Update Variables IF Frame Count condition is met
        cloudOneValue -= 0.8;
        cloudTwoValue += 1.25;
        gSunValue += 1.5;
        radius += 0.6;
        yValue -= 2;

        // Clear the Background
        ctx.fillStyle = "rgb(0, 0, " + bSkyValue + ")";
        ctx.fillRect(0, 0, 800, 450);

        // Animating the Sun
        ctx.fillStyle = "rgb(255, " + gSunValue + ", 0)";
        ctx.beginPath();
        ctx.arc(400, yValue, radius, 0, 2 * Math.PI) 
        ctx.fill();

        // Moving Clouds
        ctx.drawImage(cloudImgEl, cloudOneValue, 150, 150, 100);
        ctx.drawImage(cloudImgEl, cloudTwoValue, 100, 150, 100);

        // Green Ground (bottom rect.)
        ctx.fillStyle = "rgb(" + rGrassValue + ", " + gGrassValue + ", " + bGrassValue + ")";
        ctx.fillRect(0, 450, 800, 150)
    }

    if (frameCount > 550 && frameCount < 800) {
        // Update Sky Color (becoming lighter)
        bSkyValue -= 1;
        ctx.fillStyle = "rgb(0, 0, " + bSkyValue + ")";
        ctx.fillRect(0, 0, 800, 450);

        // changing Cloud Values
        cloudOneValue += 0.8;
        cloudTwoValue -= 0.65;

        // Animating the Sun
        gSunValue -= 1.5;
        radius -= 0.4;
        yValue += 2;

        ctx.fillStyle = "rgb(255, " + gSunValue + ", 0)";
        ctx.beginPath();
        ctx.arc(400, yValue, radius, 0, 2 * Math.PI) 
        ctx.fill();

        ctx.fillStyle = "rgb(255, " + gSunValue + ", 0)";
        ctx.beginPath();
        ctx.arc(400, yValue, radius, 0, 2 * Math.PI) 
        ctx.fill();

        // Moving Clouds
        ctx.drawImage(cloudImgEl, cloudOneValue, 150, 150, 100);
        ctx.drawImage(cloudImgEl, cloudTwoValue, 100, 150, 100);

        // Green Ground (bottom rect.)
        rGrassValue -= 0.2
        gGrassValue -= 0.5;
        bGrassValue -= 0.1;
    
        ctx.fillStyle = "rgb(" + rGrassValue + ", " + gGrassValue + ", " + bGrassValue + ")";
        ctx.fillRect(0, 450, 800, 150);

    }
    requestAnimationFrame(loop);
}

loop();

resetBtnEl.addEventListener("click", reset);
submitBtnEl.addEventListener("click", chooseFrame)

function reset() {
    frameCount = 0;
    loop();
    cloudOneValue = 100;
    cloudTwoValue = 250;
    frameCount = 0;
    gSunValue = 0;
    radius = 65;
    yValue = 450;
    bSkyValue = 100;
    rGrassValue = 100;
    gGrassValue = 240;
    bGrassValue = 65;
}

function chooseFrame() {
    let chosenFrame = frameSelectEl.value;

    frameCount = chosenFrame;
}