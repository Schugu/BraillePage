import { letrasBraille } from "./signosBraille.ts";

type SignoBrailleConNumerosProps = {
  cadenaParaCodificar: string,
  formato: string;
}

export default function SignoBrailleConNumeros({ cadenaParaCodificar, formato }:SignoBrailleConNumerosProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map(caracter => {
    if (caracter in letrasBraille) {
      return (
        <article key={caracter} className={`grid grid-rows-3 grid-cols-2 place-items-center cursor-pointer rounded
        bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
          ${formato === 'grande' ? 'w-[100px] h-[147px]' : ''}
          ${formato === 'mediano' ? 'w-[75px] h-[110.25px]' : ''}
          ${formato === 'chico' ? 'w-[50px] h-[73.5px]' : ''}
        `}>
          {
            letrasBraille[caracter].map((punto, puntoIndex) => (
              <span key={puntoIndex}
                className={`${punto === 1 ? '' : 'bg-opacity-10'} bg-black rounded-full cursor-pointer shadow-braille
                  ${formato === 'grande' ? 'w-[30px] h-[30px] text-2xl' : ''}
                  ${formato === 'mediano' ? 'w-[22.5px] h-[22.5px] text-lg' : ''}
                  ${formato === 'chico' ? 'w-[15px] h-[15px] text-[8px]' : ''}
                  text-white flex justify-center items-center 
              `}>{puntoIndex+1}</span>
            ))
          }
        </article>
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