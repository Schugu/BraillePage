import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "./BrailleSign.tsx";

type CharsToBrailleProps = {
  cadenaParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  indexProp: number;
  leerOrdinal?: boolean;
}

const CharsToBraille = ({ cadenaParaCodificar, formato, indexProp, leerOrdinal }: CharsToBrailleProps) => {
  if (typeof cadenaParaCodificar !== 'string' || cadenaParaCodificar.length === 0) {
    return null;
  }

  // Función para determinar si todas las letras de una palabra son mayúsculas
  const todasMayusculas = (palabra: string) => {
    return palabra.split('').every(letra => letra === letra.toUpperCase());
  };

  // Función para determinar si la primera letra de una palabra es mayúscula
  const primeraMayuscula = (palabra: string) => {
    return palabra.length > 0 && palabra[0] === palabra[0].toUpperCase();
  };

  // Función para filtrar y procesar las palabras
  const procesarPalabras = (cadena: string) => {
    const palabras = cadena.split(/\s+/); 
    const resultado: string[] = [];

    palabras.forEach((palabra, index) => {
      const nuevaCadena = palabra.split("").filter(caracter => /^[a-zA-ZáéíóúÁÉÍÓÚ.:,;-]$/.test(caracter)).join("");
      
      if (nuevaCadena.length > 0) {
        let nuevoTexto = nuevaCadena.toLowerCase().split("");

        if (nuevaCadena.length === 1 && primeraMayuscula(palabra)) {
          nuevoTexto = ['^', ...nuevoTexto]; // Agregar un solo signo si es una sola letra mayúscula
        } else if (todasMayusculas(palabra)) {
          nuevoTexto = ['^', '^', ...nuevoTexto];
        } else if (primeraMayuscula(palabra)) {
          nuevoTexto = ['^', ...nuevoTexto];
        }

        resultado.push(...nuevoTexto);
      }

      // Agregar espacio entre palabras, excepto al final
      if (index < palabras.length - 1) {
        resultado.push(' ');
      }
    });

    return resultado;
  };

  let newString: string[] = [];

  if (cadenaParaCodificar.toLowerCase() === cadenaParaCodificar) {
    // Si toda la cadena es minúscula, no agregar ningún signo
    newString = cadenaParaCodificar.toLowerCase().split("");
  } else {
    // Procesar palabras y agregar signos según el caso
    newString = procesarPalabras(cadenaParaCodificar);
  }

  const elementosBraille = newString.map((caracter, index) => {
    if (caracter in brailleSignValue) {
      return (
        <BrailleSign
          leerOrdinal={leerOrdinal}
          caracter={caracter}
          formato={formato}
          key={`${caracter}-${index}`}
          tabIndex={indexProp + index}
        />
      );
    } else {
      return null; 
    }
  });

  return (
    <section className="flex flex-wrap gap-1 justify-center">
      {elementosBraille}
    </section>
  );
};

export default CharsToBraille;
