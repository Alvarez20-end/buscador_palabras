import './css/styles.css';
import { buscar } from './js/buscador';
import { mostrarAlerta } from './js/alertas';

const texto = document.getElementById('texto');
const palabra = document.getElementById('palabra');
const contador = document.getElementById('contador');
const resultado = document.getElementById('resultado');

function buscarPalabra() {
  if (texto.value.trim() === '') {
    mostrarAlerta('Escribe un texto primero', 'error');
    return;
  }

  if (palabra.value === '') {
    mostrarAlerta('Escribe la palabra a buscar', 'error');
    return;
  }

  const datos = buscar(texto.value, palabra.value);
  contador.textContent = datos.veces;
  resultado.innerHTML = datos.resultado;

  if (datos.veces === 0) {
    mostrarAlerta('No se encontró la palabra', 'info');
  } else {
    mostrarAlerta('Palabra encontrada ' + datos.veces + ' veces', 'exito');
  }+
  
}

function limpiar() {
  texto.value = '';
  palabra.value = '';
  contador.textContent = '0';
  resultado.innerHTML = '';
  mostrarAlerta('Pantalla limpia', 'info');
}

document.getElementById('btnBuscar').addEventListener('click', buscarPalabra);
document.getElementById('btnLimpiar').addEventListener('click', limpiar);