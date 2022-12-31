const c = console.log
let stops = false
let testing = false

function tounixmills(date) {
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return unixTimestamp
}

c(tounixmills(new Date()))


var thedate = new Date(Date.parse(String(new Date().getFullYear() + 1) + "-01-01 00:00:00"));
console.log(tounixmills(thedate))

function draw() {
    if (tounixmills(thedate) == tounixmills(new Date()) || testing == true) {
        console.log("ITS NEW YEAR WOWOWOWOWOWOWOWOWO")
        stops = true
        document.getElementById("every").innerText = "ITS NEW YEARS TIME 🎉"
    }
    if (stops == false) {
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;
        document.getElementById("time").innerText = dateTime
    }



}
