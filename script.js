if(window.location.href.includes('lpsg.com')) {
var deleteMe = Array.from(document.getElementsByClassName("video-easter-egg-overlay"));
// deleteMe.concat(document.getElementsByClassName("video-easter-egg-blocker"));
for(let i = 0; i < deleteMe.length; i++) {
    deleteMe[i].remove();
}

var turnToLinks = document.getElementsByClassName("video-easter-egg-poster");
for(let i = 0; i < turnToLinks.length; i++) {
    turnToLinks[i].children[0].style.cursor = "pointer";
    turnToLinks[i].children[0].addEventListener('click', (event) => {
        var img = event.target || event.srcElement;
        window.open(img.src.replace("attachments/posters", "video").replace(".jpg", ".mp4").replace("thumbnail", "video"));
    });
}}
