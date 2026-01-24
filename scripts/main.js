const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
   const mySrc = myImage.getAttribute("src");
   if (mySrc === "images/the-janus-face-of-the-dragon-of-dragon-park.jpg") {
      myImage.setAttribute("src", "images/the-janus-face-of-the-dragon-of-dragon-park-reversed.jpg");
   } else {
      myImage.setAttribute("src", "images/the-janus-face-of-the-dragon-of-dragon-park.jpg");
   }
});

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
   const myName = prompt("Please enter your name.");
   if (myName) {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Janus, ${myName}`;
   }
}

if (localStorage.getItem("name")) {
   const storedName = localStorage.getItem("name");
   myHeading.textContent = `Welcome to Janus, ${storedName}`;
}

myButton.addEventListener("click", () => {
   setUserName();
});
