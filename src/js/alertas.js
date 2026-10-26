let temporizador;

export function mostrarAlerta(mensaje, tipo) {
  const alerta = document.getElementById('alerta');

  alerta.textContent = mensaje;
  alerta.className = 'alerta alerta-' + tipo;

  // Quita la alerta anterior y la oculta depsues de 3 segundops
  clearTimeout(temporizador);
  temporizador = setTimeout(function () {
    alerta.classList.add('oculto');
  }, 3000);
}