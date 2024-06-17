import brailleSignValue from "../../components/codificador/brailleSignValue";

type BrailleSignProps = {
  caracter: string;
  formato: 'chico' | 'mediano' | 'grande';
  onClick: (caracter: string) => void;
  tabIndex?: number;
}

export default function BrailleSign({ caracter, formato, onClick, tabIndex }: BrailleSignProps) {
  return (
    <div
      role="button"
      aria-label={`
        ${caracter === ' ' ? 'espacio'
          : caracter === '.' ? 'punto'
            : caracter === ':' ? 'dos puntos'
              : caracter === ',' ? 'coma'
                : caracter === ';' ? 'punto y coma'
                  : caracter === '-' ? 'guión'
                    : caracter
        }  
      `}

      tabIndex={caracter !== "º" ? tabIndex : undefined}

      onClick={() => onClick(caracter)}
      id={caracter}
      className={`grid grid-rows-3 grid-cols-2 place-items-center cursor-pointer rounded
        bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
        ${formato === 'grande' ? 'w-[100px] h-[147px]' : ''}
        ${formato === 'mediano' ? 'w-[75px] h-[110.25px]' : ''}
        ${formato === 'chico' ? 'w-[50px] h-[73.5px]' : ''}
      `}
    >
      {
        brailleSignValue[caracter].map((punto, puntoIndex) => (
          <span key={puntoIndex} aria-hidden="true"
            className={`${punto === 1 ? '' : 'bg-opacity-10'} bg-black rounded-full cursor-pointer shadow-braille
            ${formato === 'grande' ? 'w-[30px] h-[30px]' : ''}
            ${formato === 'mediano' ? 'w-[22.5px] h-[22.5px]' : ''}
            ${formato === 'chico' ? 'w-[15px] h-[15px]' : ''}
          `}
          ></span>
        ))
      }
    </div >
  );
}
