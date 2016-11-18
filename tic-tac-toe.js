// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var topLeftClicked = 0
var changePlayer = "circle"
function topLeft() {
if (topLeftClicked == 0) {
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
  topLeftClicked = 1
}  else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 50)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
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
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  topMiddleClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 150)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
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
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
  topRightClicked = 1
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 250)
    rect.setAttribute("y", 50)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle"
    topRightClicked = 1
  }
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
    rect.setAttribute("y", 150)
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


function middleMiddle() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
}  else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 150)
    rect.setAttribute("y", 150)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var middleMiddleClicked = 0
function makeShape() {
  if (middleMiddleClicked == 0) {
    middleMiddleClicked = 1
  }
}

function middleRight() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 150)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 250)
    rect.setAttribute("y", 150)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var middleRightClicked = 0
function makeShape() {
  if (middleRightClicked == 0) {
    middleRightClicked = 1
  }
}

function bottomLeft() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 50)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 50)
    rect.setAttribute("y", 250)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var bottomLeftClicked = 0
function makeShape() {
  if (bottomLeftClicked == 0) {
    bottomLeftClicked = 1
  }
}

function bottomMiddle() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 150)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 150)
    rect.setAttribute("y", 250)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var bottomMiddleClicked = 0
function makeShape() {
  if (bottomMiddleClicked == 0) {
    bottomMiddleClicked = 1
  }
}

function bottomRight() {
  if (changePlayer == "circle") {
    var circle = document.createElementNS(namespace,"circle")
circle.setAttribute("cx", 250)
circle.setAttribute("cy", 250)
circle.setAttribute("r", 30)
circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  changePlayer = "rect"
} else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 250)
    rect.setAttribute("y", 250)
    rect.setAttribute("width", 25)
    rect.setAttribute("height", 25)
    rect.setAttribute("fill", "purple")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    changePlayer = "circle" }
}

var bottomRightClicked = 0
function makeShape() {
  if (bottomRightClicked == 0) {
    bottomRightClicked = 1
  }
}
