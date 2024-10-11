import { Cloudinary } from '@cloudinary/url-gen';
import './index.js'

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
    cloud: {
      cloudName: 'dq2ssgtxk'
    }
  });

const cloudName = "dq2ssgtxk";
const uploadPreset = "nhzuxshc";

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

//Upload button functionality
document.querySelector(".uploadButton").addEventListener(
  "click",
  function () {
    console.log('Upload attempted')
    myWidget.open();
  },
  false
);

//Side buttons functionality
const sideButtons = document.querySelectorAll('.sideButton')
sideButtons.forEach((sideButton)=>{
    sideButton.addEventListener('click', ()=>{
        console.log('You are the best dev in the world')
        sideButtons.forEach(button => button.classList.remove('activated'))
        sideButton.classList.add('activated')
    })
})