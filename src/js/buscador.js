// Cambia < y > para que el texto no se tome como HTML
function limpiarHtml(texto) {
  return texto.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function buscar(texto, palabra) {
  // Se pasa todo a minúsculas para que no importe mayúsculas o minúsculas
  const textoMin = texto.toLowerCase();
  const palabraMin = palabra.toLowerCase();

  let veces = 0;
  let posicion = 0;
  let resultado = '';

  while (true) {
    // Busca la palabra a partir de la posición en la que esta
    const encontrada = textoMin.indexOf(palabraMin, posicion);

    if (encontrada === -1) {
      break;
    }

   
    resultado += limpiarHtml(texto.slice(posicion, encontrada));
    resultado += '<mark>' + limpiarHtml(texto.slice(encontrada, encontrada + palabra.length)) + '</mark>';

    posicion = encontrada + palabra.length;
    veces++;
  }

  // Agrega el texto que sobra al final
  resultado += limpiarHtml(texto.slice(posicion));

  return { veces, resultado };
}