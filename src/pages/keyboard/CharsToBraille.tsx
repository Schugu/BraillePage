import brailleSignValue from "../../components/codificador/brailleSignValue.ts";
import BrailleSign from "./BrailleSign";

type CharsToBrailleProps = {
  cadenaParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  handleClick: (caracter: string) => void;
}

export default function CharsToBraille({ cadenaParaCodificar, formato, handleClick }: CharsToBrailleProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map((caracter, index) => {
    if (caracter in brailleSignValue) {
      return (
        <BrailleSign
          tabIndex={11+index}
          caracter={caracter}
          formato={formato}
          key={`${caracter}-${index}`}
          onClick={handleClick}
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
