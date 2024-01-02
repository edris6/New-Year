function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
}

document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("checkbox1");
    var slider = document.getElementById("slider1");

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            slider.style.backgroundColor = "#2196F3";
        } else {
            slider.style.backgroundColor = "#ccc";
        }
    });
});