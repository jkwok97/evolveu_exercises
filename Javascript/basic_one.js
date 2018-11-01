
console.log("hello world from javascript file");

function myfunction(){
console.log("i am in my function");
alert ("BOOOOOOOOOOOOOOOOOOOOOM!!!!!");
}

function myfunction2(){
    alert ("I SCARED YOU!!!!!");
    }

var counting = 0
function myfunction3(){    
    document.getElementById("mydiv").innerHTML += "<br>This is my div " + counting;
    counting = counting + 1;
}

function wipe(){
    document.getElementById("mydiv").innerHTML = "This is my new div!";
}

var line = 0
function move_circle(){
    var line = document.getElementById("circle");
    var intcx = parseInt(line.getAttribute('cx'));
    line.setAttribute("cx", intcx + 25 + 'px');
    line ++;
}

function sumValues(){
    var num1, num2, res;
    num1 = Number(document.calculator.textnum1.value);
    num2 = Number(document.calculator.textnum2.value);
    res = num1 + num2;
    document.calculator.textres.value=res;
}

function circle_move(){
    var xnum, ynum;
    xnum = Number(document.circle_move2.textx.value);
    ynum = Number(document.circle_move2.texty.value);

    var line2 = document.getElementById('circle2');
    var intcx2 = parseInt(line2.getAttribute('cx'));
    var intcy2 = parseInt(line2.getAttribute('cy'));
    line2.setAttribute("cx", intcx2 + xnum + 'px');
    line2.setAttribute("cy", intcy2 + ynum + 'px');
}

function makeDraggable(evt) {
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);

    function getMousePosition(evt) {
      var CTM = svg.getScreenCTM();
      return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
    }

    var selectedElement, offset;

    function startDrag(evt) {
      if (evt.target.classList.contains('draggable')) {
        selectedElement = evt.target;
        offset = getMousePosition(evt);
        offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
        offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
      }
    }

    function drag(evt) {
      if (selectedElement) {
        evt.preventDefault();
        var coord = getMousePosition(evt);
        selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
        selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
      }
    }

    function endDrag(evt) {
      selectedElement = null;
    }
  }
 