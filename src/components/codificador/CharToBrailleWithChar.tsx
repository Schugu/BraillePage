import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "./BrailleSign.tsx";

type CharToBrailleWithCharProps = {
  cadenaParaCodificar: string,
  formato: 'chico' | 'mediano' | 'grande';
  indexProp: number;
}

export default function CharToBrailleWithChar({ cadenaParaCodificar, formato, indexProp }: CharToBrailleWithCharProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map((caracter, index) => {
    if (caracter in brailleSignValue) {
      return (
        <section key={`${caracter}-${index}`} className="flex flex-col gap-1">
          <BrailleSign
            tabIndex={indexProp + index}
            caracter={caracter}
            formato={formato}
            key={`braille-${caracter}-${index}`}
          />

          <article key={`article-${caracter}-${index}`} className={`flex justify-center items-center cursor-pointer rounded
            bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
            ${formato === 'grande' ? 'w-[100px] h-[147px] text-8xl' : ''}
            ${formato === 'mediano' ? 'w-[75px] h-[110.25px] text-7xl' : ''}
            ${formato === 'chico' ? 'w-[50px] h-[73.5px] text-5xl' : ''}
          `}>
            <p className="">
              {caracter.toUpperCase()}
            </p>
          </article>
        </section>
      );
    } else {
      return null;
    }
  });

  return (
    <section className="flex flex-wrap justify-center gap-1">
      {elementosBraille}
    </section>
  );
}
