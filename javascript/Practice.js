// testing my github
document.write(document.lastModified);
    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("Type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

function myFunction() {
    document.getElementById("demo").innerHTML = "I'll haunt you forever!";
	alert("you let me go :(")
 }