

document.addEventListener("click", function boom(){
    var audio = new Audio("explosion.wav");
    audio.play();
    document.onclick = userClicked;
    function userClicked() {
    var x = event.clientX;
    var y = event.clientY;
    var nuke = document.getElementById("nuke_img");
    nuke.style.display = '';
    nuke.style.position = 'absolute';
    nuke.style.left = x + 'px';
    nuke.style.top = y + 'px';
}




})