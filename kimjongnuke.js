document.addEventListener('click', function playanthem(){
    var anthem = new Audio("https://soundcloud.com/user-727553192/anthem/s-uq4yMbmG68k?in=user-727553192/sets/kim-jong-nuke-sfx/s-Y9V8D585J2C&si=a3ad7756549a4ab8b4031f4b7daf1b3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
    anthem.play()
    anthem.loop = true;
    document.removeEventListener('click', playanthem);
})    


document.addEventListener("click", function boom(){
    var audio = new Audio("https://soundcloud.com/user-727553192/explosion/s-be560hwfwQN?in=user-727553192/sets/kim-jong-nuke-sfx/s-Y9V8D585J2C&si=a3ad7756549a4ab8b4031f4b7daf1b3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
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
