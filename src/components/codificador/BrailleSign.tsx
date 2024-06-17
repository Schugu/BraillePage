import brailleSignValue from "./brailleSignValue.ts";
import { Tooltip } from "react-tooltip";

type BrailleSignProps = {
  caracter: string;
  formato: 'chico' | 'mediano' | 'grande';
  key: string;
  tabIndex?: number;
  leerOrdinal?: boolean;
}

export default function BrailleSign({ caracter, formato, tabIndex, leerOrdinal }: BrailleSignProps) {
  const caracterFormatead: string =
    caracter === '¥' ? 'Signo generador'
      : caracter === 'º' ? 'Signo numérico'
        : caracter === ' ' ? 'Espacio'
          : caracter.toUpperCase();
  return (
    <div
      data-tooltip-delay-show={700}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={caracterFormatead}

      tabIndex={caracter !== "º" ? tabIndex
        : leerOrdinal === true ? tabIndex : undefined}
      role="button"
      aria-label={`
        ${caracter === ' ' ? 'espacio'
          : caracter === '.' ? 'punto'
            : caracter === ':' ? 'dos puntos'
              : caracter === ',' ? 'coma'
                : caracter === ';' ? 'punto y coma'
                  : caracter === '-' ? 'guión'
                    : caracter === '¥' ? 'signo generador'
                      : caracter === 'º' ? 'signo numérico'
                        : caracter
        }  
      `}
      id={caracter} className={`grid grid-rows-3 grid-cols-2 place-items-center cursor-pointer rounded
      bg-transparent hover:bg-gray-200 hover:bg-opacity-50 border border-black shadow-braille transition-colors duration-150
        ${formato === 'grande' ? 'w-[100px] h-[147px]' : ''}
        ${formato === 'mediano' ? 'w-[75px] h-[110.25px]' : ''}
        ${formato === 'chico' ? 'w-[50px] h-[73.5px]' : ''}
      `}>
      {
        brailleSignValue[caracter].map((punto, puntoIndex) => (
          <span key={puntoIndex} aria-hidden="true"
            className={`${punto === 1 ? '' : 'bg-opacity-10'} bg-black rounded-full cursor-pointer shadow-braille
                ${formato === 'grande' ? 'w-[30px] h-[30px]' : ''}
                ${formato === 'mediano' ? 'w-[22.5px] h-[22.5px]' : ''}
                ${formato === 'chico' ? 'w-[15px] h-[15px]' : ''}
            `}></span>
        ))
      }

      <Tooltip
        id="my-tooltip"
        border="2px solid #60a5ef"
        style={{ fontSize: '15px', padding: '0px 10px' }}
      />
    </div>
  )
}
