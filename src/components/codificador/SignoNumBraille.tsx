import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "../codificador/BrailleSign.tsx";

type SignoBrailleProps = {
  numerosParaCodificar: string,
  formato: string;
}

export default function SignoBraille({ numerosParaCodificar, formato }: SignoBrailleProps) {
  const numeros = numerosParaCodificar.match(/\d+|\s+/g);

  if (numeros === null) {
    return null;
  }

  const elementosBraille = numeros.map(numSinFormato => {
    const numero = parseFloat(numSinFormato).toLocaleString('es-ES').toString();

    if (numero.length < 2) {
      if (numero in brailleSignValue) {
        let numeroConSimbolo = [];

        if (numero === ' ') {
          numeroConSimbolo = [numero];
        } else {
          numeroConSimbolo = ['º', numero];
        }

        return numeroConSimbolo.map((num, index) => {
          return (
            <BrailleSign caracter={num} formato={formato} index={index} />
          );
        });
      }
    } else {
      const charSeparados = ['º', ...numero.split('')];

      return charSeparados.map((char, index) => {
        if (char in brailleSignValue) {
          return (
            <BrailleSign caracter={char} formato={formato} index={index} key={index} /> // Asegúrate de agregar una key única para cada componente
          );
        }
        return null; 
      });
    }
  })

  return (
    <section className="flex flex-wrap gap-1">
      {elementosBraille.flat()}
    </section>
  );
}
