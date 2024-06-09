import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "../codificador/BrailleSign.tsx";

type WordToBrailleProps = {
  cadenaParaCodificar: string,
  formato: string;
}

export default function WordToBraille({ cadenaParaCodificar, formato }: WordToBrailleProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map((caracter, index) => {
    if (caracter in brailleSignValue) {
      return (
        <BrailleSign caracter={caracter} formato={formato} index={index}/>
      );
    } else {
      return null;
    }
  });


  return (
    <section className="flex flex-wrap gap-1">
      {elementosBraille}
    </section>
  );
}
