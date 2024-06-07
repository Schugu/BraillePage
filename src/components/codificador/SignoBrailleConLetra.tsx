import { letrasBraille } from "./signosBraille.ts";

type SignoBrailleConLetraProps = {
  cadenaParaCodificar: string,
  formato: string;
}

export default function SignoBrailleConLetra({ cadenaParaCodificar, formato }: SignoBrailleConLetraProps) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  const elementosBraille = cadenaSeparada.map(caracter => {
    if (caracter in letrasBraille) {
      return (
        <section className="flex flex-col gap-1">
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
                  ${formato === 'grande' ? 'w-[30px] h-[30px]' : ''}
                  ${formato === 'mediano' ? 'w-[22.5px] h-[22.5px]' : ''}
                  ${formato === 'chico' ? 'w-[15px] h-[15px]' : ''}
              `}></span>
              ))
            }
          </article>

          <article key={caracter} className={`flex justify-center items-center cursor-pointer rounded
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
