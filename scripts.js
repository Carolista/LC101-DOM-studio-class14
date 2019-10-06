// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('Window loaded.');
});

function init() {
    // Reference 'Current Flight Status' readout (string in p)
    let fstatus = document.getElementById("flightStatus");

    // Reference shuttle background box (div)
    let shuttleBkg = document.getElementById("shuttleBackground");

    // Reference Space Shuttle Height readout (string in p)
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    // Reference 'Take off' button and code event
    let takeoffButton = document.getElementById("takeoff");    
    takeoffButton.addEventListener("click", function() {
        console.log('Asking user to confirm shuttle is ready for takeoff.');
        ifReady = confirm("Confirm that the shuttle is ready for takeoff.");
        if (ifReady) { // if user chooses "OK"
            console.log('Shuttle takeoff confirmed. Flight status changed. Background color changed. Height is now 10,000 miles.');
            fstatus.innerHTML = "Shuttle in flight."; // change flight status readout
            shuttleBkg.style.backgroundColor = "blue"; //change background of box
            shuttleHeight.innerHTML = 10000; // add 10,000 miles to height readout
        } else {
            console.log('User changed their mind about launching at this time.');
        }
    });

    // Reference 'Land' button and code event
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        console.log("Shuttle has landed. Flight status changed. Background color changed. Height is now 0 miles.")
        alert("The shuttle is landing. Landing gear engaged.");
        fstatus.innerHTML = "The shuttle has landed."; // change flight status readout
        shuttleBkg.style.backgroundColor = "green"; //change background of box
        shuttleHeight.innerHTML = 0; // bring back to 0 miles
        lcRocket.style.marginBottom = 0; 
        rocketPosY = 0; // reset rocket image Y variable for calculations
    });

    // Reference 'Abort Mission' button and code event
    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function() {
        ifAbort = confirm("Confirm that you want to abort the mission.");
        if (ifAbort) { // if user chooses "OK"
            console.log('Mission aborted. Flight status unchanged. Background color unchanged. Height remains at 0 miles.');
            fstatus.innerHTML = "Mission aborted."; // change flight status readout
            shuttleBkg.style.backgroundColor = "green"; //change background of box
            shuttleHeight.innerHTML = 0; // keep height readout
            lcRocket.style.marginBottom = 0; // reset rocket image Y position
            rocketPosY = 0; // reset rocket image Y variable for calculations
        }
    });

    // Reference LC rocket image (img)
    let lcRocket = document.getElementById("rocket");

    // Assign variables to manage position of LC rocket image
    let rocketPosX = 0;
    let rocketPosY = 0;

    // Reference 'Up' button and code event
    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function() {
        console.log('Moving rocket upwards.');
        rocketPosY += 10;
        lcRocket.style.marginBottom = rocketPosY + 'px';
        shuttleHeight.innerHTML = 10000;
    });

    // Reference 'Down' button and code event
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function() {
        console.log('Moving rocket downward.');
        rocketPosY -= 10;
        lcRocket.style.marginBottom = rocketPosY + 'px';
        shuttleHeight.innerHTML = 0;
    });

    // Reference 'Right' button and code event
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function() {
        console.log('Moving rocket to the right.');
        rocketPosX += 10;
        lcRocket.style.marginLeft = rocketPosX + 'px';
    });

    // Reference 'Left' button and code event
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function() {
        console.log('Moving rocket to the left.');
        rocketPosX -= 10;
        lcRocket.style.marginLeft = rocketPosX + 'px';
    });
}

// Bonus mission part 1 - hmm...
// Bonus mission part 2 - done.

window.onload = init;