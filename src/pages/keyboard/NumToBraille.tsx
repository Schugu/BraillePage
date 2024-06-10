import brailleSignValue from "../../components/codificador/brailleSignValue";
import BrailleSign from "./BrailleSign";

type NumToBrailleProps = {
  numerosParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  handleClick: (caracter: string) => void;
}

export default function NumToBraille({ numerosParaCodificar, formato, handleClick }: NumToBrailleProps) {
  const numeros = numerosParaCodificar.match(/\d+|\s+/g);

  if (numeros === null) {
    return null;
  }

  const elementosBraille = numeros.map((numSinFormato, numIndex) => {
    if (numSinFormato.length < 2) {
      if (numSinFormato in brailleSignValue) {
        let numeroConSimbolo: string[] = [];
    
        if (numSinFormato === ' ') {
          numeroConSimbolo = [];
        } else {
          numeroConSimbolo = ['º', numSinFormato];
        }

        return numeroConSimbolo.map((num, index) => {
          return (
            <BrailleSign 
              caracter={num} 
              formato={formato} 
              key={`${num}-${numIndex}-${index}`} 
              onClick={handleClick}
            />
          );
        });
      }
    } else {
      const numero = parseFloat(numSinFormato.replace(/\s/g, '')).toLocaleString('es-ES').toString();
      const charSeparados = ['º', ...numero.split('')];

      return charSeparados.map((char, charIndex) => {
        if (char in brailleSignValue) {
          return (
            <BrailleSign 
              caracter={char} 
              formato={formato} 
              key={`${char}-${numIndex}-${charIndex}`} 
              onClick={handleClick}
            />
          );
        }
        return null; 
      });
    }
  });

  return (
    <section className="flex flex-wrap gap-1">
      {elementosBraille.flat()}
    </section>
  );
}
