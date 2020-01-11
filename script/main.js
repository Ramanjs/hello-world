var myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/w3schools.jpg'){
		myImage.setAttribute('src','images/download.png');
	} else {
		myImage.setAttribute('src','images/w3schools.jpg');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  	let myName = prompt('Please enter your name.');
  	if(!myName || myName === null) {
 		setUserName();
 	} else {
 		localStorage.setItem('name', myName);
 		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
	if(!localStorage.getItem('name')) {
		setUserName();
	} else {
  		let storedName = localStorage.getItem('name');
  		myHeading.textContent = 'Mozilla is cool, ' + storedName;
 	}
}
myButton.onclick = function() {
  setUserName();
}