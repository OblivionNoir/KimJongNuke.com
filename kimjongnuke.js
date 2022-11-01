document.addEventListener('click', function playanthem(){
    var anthem = new Audio("https://soundcloud.com/user-727553192/anthem/s-uq4yMbmG68k?in=user-727553192/sets/kim-jong-nuke-sfx/s-Y9V8D585J2C&si=a3ad7756549a4ab8b4031f4b7daf1b3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
    anthem.play()
    anthem.loop = true;
    document.removeEventListener('click', playanthem);
})    


document.addEventListener("click", function boom(){
    var audio = new Audio("https://cf-media.sndcdn.com/WGqCMPAZWnJW.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vV0dxQ01QQVpXbkpXLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjY3MzM0MjI2fX19XX0_&Signature=FckznNWKnOWLisnZtOqJS53w9BvQcg~ZwfBTKzLKY-tOUcaxSjSsrl9LvBEquitK9Oh3OCUFVhJsz57bglzgqF-OWPk-o-Vwhfm2jC1s~MPMchrxZbLjlGhHEbU6MegKYdL2nedodfioog3TYWHjusxWY6mEBUr1EFBPSRLOXBWJutHf-0pdhUxCbCb-eveSwZdRyxO2j4XZBiB~h0B9fzzDS6v-hLpXqNgddlJkaZ0Y3khZPB7D5UdxaNBibhogaUsAwDFI6fAt-jsdOqyDP0SWr1nVtiDcYJzW4DaO1PhcpHeGhkoZ0-WOWPj7u6qeqVVjMsHqVd46aa4njnrbyQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ");
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
