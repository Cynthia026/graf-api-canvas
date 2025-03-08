// Obtener el canvas y el contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Función para limpiar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función para dibujar un cuadrado (SE DIBUJARÁ POR DEFECTO AL CARGAR LA PÁGINA)
function drawSquare() {
    clearCanvas();
    ctx.fillStyle = "green";
    ctx.fillRect(175, 175, 150, 150);  // (x, y, ancho, alto) - Cuadrado centrado
}

// Función para dibujar un rectángulo
function drawRectangle() {
  clearCanvas();
  ctx.beginPath();
  ctx.moveTo(200,200);
  ctx.fillStyle = "blue";
  ctx.fillRect(100, 100, 300, 200);

}

// Función para dibujar un triángulo
function drawTriangle() {
    clearCanvas();
    ctx.beginPath();
    ctx.moveTo(250, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(300, 200);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
}

// Función para dibujar líneas
function drawLines() {
    clearCanvas();
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(200, 400);
    ctx.lineTo(350, 300);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Función para dibujar un arco (círculo)
function drawArc() {
    clearCanvas();
    ctx.beginPath();
    ctx.arc(400, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "pink";
    ctx.fill();
}

// Función para dibujar una curva Bézier
function drawBezierCurve() {
    clearCanvas();
    ctx.beginPath();
    ctx.moveTo(50, 400);
    ctx.bezierCurveTo(150, 300, 250, 500, 350, 400);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Función para dibujar una curva cuadrática
function drawQuadraticCurve() {
    clearCanvas();
    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.quadraticCurveTo(200, 350, 350, 450);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Dibujar automáticamente el cuadrado al cargar la página
window.onload = drawSquare;
