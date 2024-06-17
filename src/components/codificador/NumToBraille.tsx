import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "./BrailleSign.tsx";

type NumToBrailleProps = {
  numerosParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  indexProp: number;
  leerOrdinal?: boolean;
}

export default function NumToBraille({ numerosParaCodificar, formato, indexProp, leerOrdinal }: NumToBrailleProps) {
  const numeros = numerosParaCodificar.match(/\d+|\s+/g);

  if (numeros === null) {
    return null;
  }

  const elementosBraille = numeros.map(numSinFormato => {

    if (numSinFormato.length < 2) {
      if (numSinFormato in brailleSignValue) {
        let numeroConSimbolo = [];

        if (numSinFormato === ' ') {
          numeroConSimbolo = [numSinFormato];
        } else {
          numeroConSimbolo = ['º', numSinFormato];
        }

        return numeroConSimbolo.map((num, index) => {
          return (
            <BrailleSign
              leerOrdinal={leerOrdinal}
              tabIndex={indexProp + index}
              caracter={num}
              formato={formato}
              key={`${num}-${index}`}
            />
          );
        });
      }
    } else {
      const numero = parseFloat(numSinFormato).toLocaleString('es-ES').toString();

      const charSeparados = ['º', ...numero.split('')];

      return charSeparados.map((char, index) => {
        if (char in brailleSignValue) {
          return (
            <BrailleSign
              leerOrdinal={leerOrdinal}
              tabIndex={indexProp + index}
              caracter={char}
              formato={formato}
              key={`${char}-${index}`}
            />
          );
        }
        return null;
      });
    }
  })
  return (
    <section className="flex flex-wrap gap-1 justify-center">
      {elementosBraille.flat()}
    </section>
  );
}
