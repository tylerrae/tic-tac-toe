// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var changePlayer = "circle"
function topLeft() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 50)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
circle.setAttribute("fill-opacity", 1)
var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
}  else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 50)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
  var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var topLeftClicked = 0
function makeShape() {
  if  (topLeftClicked == 0) {
    topLeftClicked = 1
  }
}



function topMiddle() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 50)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 150)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }

}

var topMiddleClicked = 0
function makeShape() {
  if (topMiddleClicked == 0) {
    topMiddleClicked = 1
  }
}


function topRight() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 50)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 50)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var topRightClicked = 0
function makeShape() {
  if (topRightClicked == 0) {
    topRightClicked = 1
  }
}

function middleLeft() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 50)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var middleLeftClicked = 0
function makeShape() {
  if (middleLeftClicked == 0) {
    middleLeftClicked = 1
  }
}

var currentShape = "circle"
function middleMiddle() {
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
}

var middleMiddleClicked = 0
function makeShape() {
  if (middleMiddleClicked == 0) {
    middleMiddleClicked = 1
  }
}

var currentShape = "circle"
function middleRight() {
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
}

var middleRightClicked = 0
function makeShape() {
  if (middleRightClicked == 0) {
    middleRightClicked = 1
  }
}

var currentShape = "circle"
function bottomLeft() {
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
}

var bottomLeftClicked = 0
function makeShape() {
  if (bottomLeftClicked == 0) {
    bottomLeftClicked = 1
  }
}

var currentShape = "circle"
function bottomMiddle() {
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
}

var bottomMiddleClicked = 0
function makeShape() {
  if (bottomMiddleClicked == 0) {
    bottomMiddleClicked = 1
  }
}

var currentShape = "circle"
function bottomRight() {
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
}

var bottomRightClicked = 0
function makeShape() {
  if (bottomRightClicked == 0) {
    bottomRightClicked = 1
  }
}
