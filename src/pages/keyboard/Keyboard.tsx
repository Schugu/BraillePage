import { useState } from 'react';
import CharsToBraille from "./CharsToBraille";

export default function Keyboard() {
  const [selectedChars, setSelectedChars] = useState<string[]>([]);

  const handleClick = (caracter: string) => {
    setSelectedChars(prevSelectedChars => [...prevSelectedChars, caracter]);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-2 text-2xl">
      <h1 className="w-full border-b-4 border-orange-600 text-5xl text-center">El alfabeto</h1>

      <CharsToBraille cadenaParaCodificar="123 " formato="chico" handleClick={handleClick} />
      <p>{selectedChars}</p>
    </section>
  );
}
