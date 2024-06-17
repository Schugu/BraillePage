import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "./BrailleSign.tsx";

type CharsToBrailleProps = {
  cadenaParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  indexProp: number;
  leerOrdinal?: boolean;
}

export default function CharsToBraille({ cadenaParaCodificar, formato, indexProp, leerOrdinal }: CharsToBrailleProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map((caracter, index) => {
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
}
