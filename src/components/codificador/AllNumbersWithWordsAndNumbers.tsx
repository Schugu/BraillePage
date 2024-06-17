import brailleSignValue from "./brailleSignValue.ts";
import BrailleSign from "./BrailleSign.tsx";

type AllNumbersWithWordsAndNumbersProps = {
  formato: 'chico' | 'mediano' | 'grande';
  tabIndex: number;
}

export default function AllNumbersWithWordsAndNumbers({ formato, tabIndex }: AllNumbersWithWordsAndNumbersProps) {
  const cadenaParaCodificar = "1234567890";
  const numeros = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',];


  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map((caracter, index) => {
    if (caracter in brailleSignValue) {
      return (
        <section key={index} className="flex flex-col gap-1">
          <article key={`1${caracter}-${index}`} className={`flex justify-center items-center cursor-pointer rounded
        bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
          ${formato === 'grande' ? 'w-[100px] h-[147px] text-8xl' : ''}
          ${formato === 'mediano' ? 'w-[75px] h-[110.25px] text-7xl' : ''}
          ${formato === 'chico' ? 'w-[50px] h-[73.5px] text-5xl' : ''}
        `}>
            <p className="">
              {numeros[index]}
            </p>
          </article>

          <BrailleSign
            tabIndex={tabIndex + index}
            caracter={caracter}
            formato={formato}
            key={`BrailleSign-${caracter}-${index}`}
          />

          <article key={`2${caracter}-${index}`} className={`flex justify-center items-center cursor-pointer rounded
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