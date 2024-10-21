// Speed limit is 70.
// Show 'OK' if below speed limit.
// For every 5 above speed limit, add 1 point and display that.
// More than 12 points - show `License Suspended`.

function checkSpeed(speed) {
    const limit = 70;
    const kmPerPoint = 5;
    if (speed <= limit + kmPerPoint) {
        console.log("OK");
        return;

    }

    let points = Math.floor((speed - limit) / kmPerPoint);
    if (points >= 12)
        console.log("License Suspended");
    else
        console.log("Points:", points);
}

checkSpeed(70);
checkSpeed(140);
checkSpeed(66);
checkSpeed(200);