if(window.location.href.includes('lpsg.com/threads')) {
var deleteMe = Array.from(document.getElementsByClassName("video-easter-egg-overlay"));
deleteMe.concat(document.getElementsByClassName("video-easter-egg-blocker"));
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
}} else if(window.location.href.includes('lpsg.com/data')) {
    var alert_div = document.createElement("div");
    alert_div.style = "position: fixed;\
				top: 50%;\
				left: 50%;\
				margin-top: -50px;\
				margin-left: -50px;\
				width: 250px;\
				border: 3px solid red;\
				background-color: white;\
				color: black;\
				padding: 10px";
    alert_div.innerHTML = "<p>Oops, maybe try one of the following:</p>";
    ["mp4", "mov", "mkv", "m4v", "webm", "avi", "flv"].map((ext) => alert_div.innerHTML +="<a target=_'blank' href=" + window.location.href.replace(/(?<=\.)[^.]*$/, ext + "\n") + ">" + ext + "</a></br>");
    alert_div
    document.body.appendChild(alert_div);
}
