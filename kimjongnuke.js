


document.addEventListener("click", function boom(){
    var audio = new Audio("https://cf-media.sndcdn.com/WGqCMPAZWnJW.128.mp3");
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
