const c = console.log
let stopcounting = false
let testing = false
let thedate = new Date(Date.parse(String(new Date().getFullYear() + 1) + "-01-01 00:00:00"));


function tounixmills(date) {
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp
}

function eleID(id) {
    return document.getElementById(id);
}

function draw() {
    const Christmas = eleID("checkbox2").checked
    
    if (Christmas == true) {
        thedate = new Date(new Date().getFullYear(), 11, 25);
        eleID("nextyear").innerHTML = "Christmas"
    } else {
        thedate = new Date(Date.parse(String(new Date().getFullYear() + 1) + "-01-01 00:00:00"));
        eleID("nextyear").innerHTML = String(new Date().getFullYear() + 1)
    }

    if (tounixmills(thedate) == tounixmills(new Date()) || stopcounting == true) {
        c("ITS NEW YEAR WOWOWOWOWOWOWOWOWO")
        stopcounting = true
        eleID("every").innerText = Christmas ? "Happy Christmas Fellas" : "ITS NEW YEARS TIME 🎉"
        return;
    }

    let diff = new Date(thedate.getTime() - new Date().getTime());

    const daysremaining = eleID("checkbox1").checked
    let years = diff.getUTCFullYear() - 1970; // Gives difference as year
    let months = diff.getUTCMonth(); // Gives month count of difference
    let days = diff.getUTCDate() - 1; // Gives day count of difference
    let hours = diff.getUTCHours()
    let minutes = diff.getMinutes()
    let seconds = diff.getUTCSeconds()
    let final_string = years + "y-" + months + "m-" + days + "d   " + hours + ":" + minutes + ":" + (seconds + 1)
    if (years == 0 && months == 0 && days == 0 && hours == 0 && minutes == 0) {
        final_string = (seconds + 1)
    } else if (years == 0 && months == 0 && days == 0 && hours == 0) {
        final_string = minutes + ":" + (seconds + 1)
    } else if (years == 0 && months == 0 && days == 0) {
        final_string = hours + ":" + minutes + ":" + (seconds + 1)
    } else if (years == 0 && months == 0 && daysremaining == false) {
        final_string = days + "d   " + hours + ":" + minutes + ":" + (seconds + 1)
    } else if (years == 0 && daysremaining == false) {
        final_string = months + "m-" + days + "d   " + hours + ":" + minutes + ":" + (seconds + 1)
    } else if (daysremaining == true) {
        final_string = Math.floor((thedate - new Date()) / (1000 * 60 * 60 * 24)) + "d   " + hours + ":" + minutes + ":" + (seconds + 1)
    }
    eleID("time").innerText = final_string




}

