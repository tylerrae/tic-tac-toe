// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var topLeftClicked = 0
var changePlayer = "circle"
function topLeft() {
if (topLeftClicked == 0) {
   if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 380)
circle.setAttribute("cy", 130)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
circle.setAttribute("fill-opacity", 1)
var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  topLeftClicked = 1
}  else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 355)
    rect.setAttribute("y", 105)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    topLeftClicked = 1
  }
}
}


var topMiddleClicked = 0
function topMiddle() {
  if (topMiddleClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 50)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  topMiddleClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 125)
    rect.setAttribute("y", 25)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    topMiddleClicked = 1
  }
}
}

var topRightClicked = 0
function topRight() {
  if (topRightClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 50)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  topRightClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 225)
    rect.setAttribute("y", 25)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    topRightClicked = 1
  }
}
}

var middleLeftClicked = 0
function middleLeft() {
  if (middleLeftClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  middleLeftClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 25)
    rect.setAttribute("y", 125)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    middleLeftClicked = 1
  }
}
}


var middleMiddleClicked = 0
function middleMiddle() {
  if (middleMiddleClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  middleMiddleClicked = 1
}  else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 125)
    rect.setAttribute("y", 125)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    middleMiddleClicked = 1
  }
}
}


var middleRightClicked = 0
function middleRight() {
  if (middleRightClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  middleRightClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 225)
    rect.setAttribute("y", 125)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    middleRightClicked = 1
  }
 }
}


var bottomLeftClicked = 0
function bottomLeft() {
  if (bottomLeftClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  bottomLeftClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 25)
    rect.setAttribute("y", 225)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    bottomLeftClicked = 1
  }
}
}


var bottomMiddleClicked = 0
function bottomMiddle() {
  if (bottomMiddleClicked == 0) {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  bottomMiddleClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 125)
    rect.setAttribute("y", 225)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    bottomMiddleClicked = 1
  }
}
}


var bottomRightClicked = 0
function bottomRight() {
  if (bottomRightClicked == 0)  {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "pink")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  bottomRightClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 225)
    rect.setAttribute("y", 225)
    rect.setAttribute("width", 50)
    rect.setAttribute("height", 50)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    bottomRightClicked = 1
  }
}
}
