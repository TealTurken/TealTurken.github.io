function showImage1(event) {
    event.preventDefault();

    stageImg.src = "./img/spline_rotator.gif";
    stageImg.alt = "Image 1";
    stageTitle.textContent = "Moving Platforms";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "Shown is a moving platform blueprint in Unreal Engine. The chosen object can be changed freely and it follows along the constructed spline. The travel speed as well as whether it faces forwards along the path or rotates freely are available as well.";
}

function showImage2(event) {
    event.preventDefault();

    stageImg.src = "./img/Horizontal_Throw.gif";
    stageImg.alt = "Image 2";
    stageTitle.textContent = "Hammer Throw";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "Previously the horizontal throw mechanic, now known as the hammer throw. The throw has to be charged for Sseveral seconds to achieve maximum distance while the rotation rate and guaged distance increase. It is intended for both characters to travel along this path with Momo's weight dragging Mako along.";
}

function showImage3(event) {
    event.preventDefault();

    stageImg.src = "./img/Vertical_Throw.gif";
    stageImg.alt = "Image 3";
    stageTitle.textContent = "Vertical Throw";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "The vertical throw mechanic wherein Momo throws Mako up to places neither can get to alone. An arch is shown to aid not only in aiming the throw, but in understanding the level of charge behind it.";
}

function showImage4(event) {
    event.preventDefault();

    stageImg.src = "./img/Code_MovingPlat.gif";
    stageImg.alt = "Image 4";
    stageTitle.textContent = "Moving Platforms Code";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "Shown is the moving platform blueprint code, specifically along the timeline which handles the platform's travel time and rotation.";
}

function showImage5(event) {
    event.preventDefault();

    stageImg.src = "./img/Code_VerticalThrow.gif";
    stageImg.alt = "Image 5";
    stageTitle.textContent = "Vertical Throw Code";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "Some of the code used for the vertical throw, this specifically handles the charge time and drawing the arc used for aiming. The horizontal and hammer throw code has a similar design to this.";
}

function showImage6(event) {
    event.preventDefault();

    stageImg.src = "./img/AI_Follow.gif";
    stageImg.alt = "Image 6";
    stageTitle.textContent = "AI Companion Follow";
    stageSubTitle.textContent = "Momo and Mako";
    stageText.textContent = "During play, Mako follows Momo around wherever she goes. There's a minimum distance when Mako stops and there's a small bit of 'drag' so his movement appears more organic.";
}

function init() {
    var stageImg = document.getElementById("stageImage");
    var stageText = document.getElementById("stageText");
    var stageTitle = document.getElementById("stageTitle")
    var stageSubTitle = document.getElementById("stageSubTitle");

    var galleryImage1 = document.getElementById("img1");
    galleryImage1.addEventListener("click", showImage1, false);
    var galleryImage2 = document.getElementById("img2");
    galleryImage2.addEventListener("click", showImage2, false);
    var galleryImage3 = document.getElementById("img3");
    galleryImage3.addEventListener("click", showImage3, false);
    var galleryImage4 = document.getElementById("img4");
    galleryImage4.addEventListener("click", showImage4, false);
    var galleryImage5 = document.getElementById("img5");
    galleryImage5.addEventListener("click", showImage5, false);
    var galleryImage6 = document.getElementById("img6");
    galleryImage6.addEventListener("click", showImage6, false);
}
window.addEventListener("load", init, false);