function showImage1(event) {
    event.preventDefault();

    stageimg.src = "./img/spline_rotator.gif";
    stageimg.alt = "Image 1";
    stagetext.textContent = "All about my spline rotator!";
}

function init() {
    var stageimg = document.getElementById("stageimage");
    var stagetext = document.getElementById("stagetext");

    var galleryImage1 = document.getElementById("img1");
    galleryImage1.addEventListener("click", showImage1, false);
}
window.addEventListener("load", init, false);