// To add ability to view oue video
// import it in room
// Contains js for front end

// Fetching from html
const videoGrid = document.getElementById("video-grid");

// Creating HTML Element
const myVideo = document.createElement("video");
myVideo.muted = true;

// variable contain my video
// let myVideoStream;

//To access audio and video from browser
navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
        // We can see that it is a promise so user can give/deny access permission
    })
    .then((stream) => {
        // myVideoStream = stream;
        addVideoStream(myVideo, stream);
    });

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    // Now will play video
    video.addEventListener("loadedmetadata", () => {
        video.play();
    });
    // Putting the video Element in Html
    videoGrid.append(video);
};