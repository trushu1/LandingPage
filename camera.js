var video=document.querySelector("#videoelement");
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video=true}),
    then(function(stream){
        video.scrcObject=stream;
    })
    .catch(function(error){
       console.log("Something went wrong");
});
}