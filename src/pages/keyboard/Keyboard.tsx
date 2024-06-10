import { useState } from 'react';
import CharsToBraille from "./CharsToBraille";
import NumToBraille from "./NumToBraille.tsx";

export default function Keyboard() {
  const [selectedChars, setSelectedChars] = useState<string[]>([]);

  const handleClick = (caracter: string) => {
    if (caracter !== 'º') {
      setSelectedChars(prevSelectedChars => [...prevSelectedChars, caracter]);
    }
  };

  const handleRemoveLast = () => {
    setSelectedChars(prevSelectedChars => prevSelectedChars.slice(0, -1));
  };

  const handleClearAll = () => {
    setSelectedChars([]);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-2 text-2xl">
      <article className='flex flex-col gap-2 w-full'>
        <h1 className="w-full border-b-4 border-blue-950 text-5xl text-center">Teclado</h1>
        <p className='text-center'>Escriban palabras en base a lo aprendido anteriormente.</p>
      </article>

      <article className='w-full flex flex-col gap-4 justify-center items-center'>
        <p className='w-full md:w-4/6 min-h-20 p-2 border-2 border-blue-950 bg-blue-100 text-blue-900 rounded-md'>{selectedChars}</p>
        <div className='flex flex-wrap gap-6 justify-center'>
          <button onClick={handleRemoveLast}
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Borrar</button>
          <button onClick={handleClearAll}
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
          >Borrar todo</button>
        </div>
      </article>

      <article className='flex flex-col gap-2 items-center'>
        <CharsToBraille cadenaParaCodificar="qwertyuiopasdfghjklzxcvbnm,;.:- " formato="chico" handleClick={handleClick} />
        <NumToBraille numerosParaCodificar='1 2 3 4 5 6 7 8 9 0' formato='chico' handleClick={handleClick} />
      </article>
    </section>
  );
}
