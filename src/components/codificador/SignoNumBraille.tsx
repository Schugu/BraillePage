import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "../codificador/BrailleSign.tsx";

type SignoBrailleProps = {
  numerosParaCodificar: string,
  formato: string;
}

export default function SignoBraille({ numerosParaCodificar, formato }: SignoBrailleProps) {
  const numeros = numerosParaCodificar.match(/\d+|\s+/g);
  
  const elementosBraille = numeros.map(numero => {
    if (numero.length < 2) {
      if (numero in brailleSignValue) 
        console.log(numero);

        let numeroConSimbolo = [];

        if (numero === ' '){
          numeroConSimbolo = [numero];
        } else {
          numeroConSimbolo = ['º', numero];
        }

        console.log(numeroConSimbolo);

        return numeroConSimbolo.map((num, index) => {
          if (num in brailleSignValue) {
            return (
              <BrailleSign caracter={num} formato={formato} index={index}/>
            );
          } else {
            return null;
          }
        });
    } else {
      return null;
    }
  });

  return (
    <section className="flex flex-wrap gap-1">
      {elementosBraille.flat()}
    </section>
  );
}
