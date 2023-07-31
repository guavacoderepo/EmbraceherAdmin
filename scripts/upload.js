const myWidget = cloudinary.createUploadWidget({
    cloudName: 'mosco-cloud', 
    uploadPreset: 'uw-test'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            console.log('Done! Here is the image url: ', result.info.secure_url); 
        } else {
            console.log('error:', error)
        }
    }
);

document.getElementById("add").addEventListener("click", function(){
    myWidget.open();
}, false);