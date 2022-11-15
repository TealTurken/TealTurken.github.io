function showImage1(event) {
    event.preventDefault();

    stageImg.src = "./img/spline_rotator.gif";
    stageImg.alt = "Image 1";
    stageText.textContent = "All about my spline rotator!";
}

function init() {
    var stageImg = document.getElementById("stageImage");
    var stageText = document.getElementById("stageText");

    var galleryImage1 = document.getElementById("img1");
    galleryImage1.addEventListener("click", showImage1, false);
}
window.addEventListener("load", init, false);