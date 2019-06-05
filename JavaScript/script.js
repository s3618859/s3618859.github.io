//Arm rotation
var button = document.getElementById('button');

function rotation(){
    const rotatingE = document.getElementById('upperRotate');

    // Event Listener
    document.addEventListener('mousemove', e => {
      // Callback function
      const mX = (e.clientX / window.innerWidth * 360)/2

      rotatingE.style.transform = 'rotate('+ mX +'deg)'
    })
}


/////////////////////////////////////Modals//////////

//////////Modal1//////////

var modal = document.getElementById("modalOne");

var btn1 = document.getElementById("button1");

var span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}

span1.onclick = function() {
  modal.style.display = "none";
}

//////////Modal 2//////////


var modal2 = document.getElementById("modalTwo");

var btn2 = document.getElementById("button2");

var span2 = document.getElementsByClassName("lmao")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

//////////Modal 3//////////
var modal3 = document.getElementById("modalThree");

var btn3 = document.getElementById("button3");

var span3 = document.getElementsByClassName("omg")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}
