document.addEventListener('click', function playanthem(){
    var anthem = new Audio("anthem.mp3");
    anthem.play()
    anthem.loop = true;
    document.removeEventListener('click', playanthem);
})    


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
    nukecounter()
}

})
var nuke_count =0;
function nukecounter(){
    nuke_count++;
    document.getElementById("nuke_counter").innerHTML = "Nukes Dropped:" + nuke_count;
}
