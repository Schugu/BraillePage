import { numerosBraille } from "./signosBraille.ts";

type SignoBrailleProps = {
  numerosParaCodificar: string,
  formato: string;
}

export default function SignoBraille({ numerosParaCodificar, formato }: SignoBrailleProps) {
  const numeros = numerosParaCodificar.match(/\d+|\s+/g);
  
  const elementosBraille = numeros.map((numero, numeroIndex) => {
    if (numero.length < 2) {
      if (numero in numerosBraille) 
        console.log(numero);

        let numeroConSimbolo = [];

        if (numero === ' '){
          numeroConSimbolo = [numero];
        } else {
          numeroConSimbolo = ['º', numero];
        }

        console.log(numeroConSimbolo);

        return numeroConSimbolo.map((num, index) => {
          if (num in numerosBraille) {
            return (
              <article key={`${num}-${numeroIndex}-${index}`} className={`grid grid-rows-3 grid-cols-2 place-items-center cursor-pointer rounded
              bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
                ${formato === 'grande' ? 'w-[100px] h-[147px]' : ''}
                ${formato === 'mediano' ? 'w-[75px] h-[110.25px]' : ''}
                ${formato === 'chico' ? 'w-[50px] h-[73.5px]' : ''}
              `}>
                {
                  numerosBraille[num].map((punto, puntoIndex) => (
                    <span key={`${num}-${numeroIndex}-${index}-${puntoIndex}`}
                      className={`${punto === 1 ? '' : 'bg-opacity-10'} bg-black rounded-full cursor-pointer shadow-braille
                        ${formato === 'grande' ? 'w-[30px] h-[30px]' : ''}
                        ${formato === 'mediano' ? 'w-[22.5px] h-[22.5px]' : ''}
                        ${formato === 'chico' ? 'w-[15px] h-[15px]' : ''}
                    `}></span>
                  ))
                }
              </article>
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
