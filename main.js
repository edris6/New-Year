const c = console.log
let stops = false
let testing = false
let show_time = false
function tounixmills(date) {
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp
}

c(tounixmills(new Date()))


let thedate = new Date(Date.parse(String(new Date().getFullYear() + 1) + "-01-01 00:00:00"));
//thedate = new Date(Date.parse("2023-01-01 9:43:00"));
console.log(tounixmills(thedate))

function draw() {
    if (tounixmills(thedate) == tounixmills(new Date()) || testing == true) {
        console.log("ITS NEW YEAR WOWOWOWOWOWOWOWOWO")
        stops = true
        document.getElementById("every").innerText = "ITS NEW YEARS TIME 🎉"
    }
    if (stops == true) return;
    if (show_time == true) {
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;
        document.getElementById("time").innerText = dateTime
    } else {
        let diff = new Date(thedate.getTime() - new Date().getTime());

        let years = diff.getUTCFullYear() - 1970; // Gives difference as year
        let months = diff.getUTCMonth(); // Gives month count of difference
        let days = diff.getUTCDate() - 1; // Gives day count of difference
        let hours = diff.getUTCHours()
        let minutes = diff.getMinutes()
        let seconds = diff.getUTCSeconds()
        let final_string = years + "y-" + months + "m-" + days + "d   " + hours + ":" + minutes + ":" + seconds
        if(years == 0 && months == 0 && days == 0 && hours == 0 && minutes == 0){
            final_string = seconds
        }else if(years == 0 && months == 0 && days == 0 && hours == 0){
            final_string = minutes + ":" + seconds
        }else if(years == 0 && months == 0 && days == 0){
            final_string = hours + ":" + minutes + ":" + seconds
        }
        document.getElementById("time").innerText = final_string
    }



}

function keyPressed() {
    if (keyCode != 77) return;
    if (show_time == false) {
        show_time = true
        document.getElementById("every").innerHTML = 'Current time: <span id="time"></span>'
    } else {
        show_time = false
        document.getElementById("every").innerHTML = 'Time remaning: <span id="time"></span>'
    }
}