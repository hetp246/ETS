// Valores iniciales de intensidad de cada color
let rojo = 0, amarillo = 0, azul = 0;

// Función para actualizar el fondo con mezcla de colores
function actualizarFondo() {
  // Cada click suma 40 (puedes ajustar la intensidad)
  let r = Math.min(rojo * 40, 255);
  let g = Math.min(amarillo * 40, 255);
  let b = Math.min(azul * 40, 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Eventos de los botones
document.getElementById("rojo").addEventListener("click", () => {
  rojo++;
  actualizarFondo();
});

document.getElementById("amarillo").addEventListener("click", () => {
  amarillo++;
  actualizarFondo();
});

document.getElementById("azul").addEventListener("click", () => {
  azul++;
  actualizarFondo();
});

// Reinicio
document.getElementById("reinicio").addEventListener("click", () => {
  rojo = amarillo = azul = 0;
  actualizarFondo();
});