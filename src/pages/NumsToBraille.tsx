import { useState } from "react";
import NumToBraille from "../components/codificador/NumToBraille.tsx";

export default function NumsToBraille() {
  const [numero, setNumero] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumero(event.target.value);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-2 text-2xl">
      <h1 className="w-full border-b-4 border-blue-950 text-5xl text-center">
        Codificador de números
      </h1>

      <article className="flex flex-col items-center gap-2">
        <p>Escriba un número</p>
        <div className="flex flex-wrap gap-2">
          <input
            onChange={handleChange}
            value={numero}
            className="rounded border-2 border-blue-400 p-2 outline-none"
            type="number"
            placeholder="123"
            autoComplete="off"
          />
          <button
            onClick={() => { setNumero('') }}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >Borrar todo</button>
        </div>
      </article>

      <article className="w-full flex justify-center">
        <NumToBraille numerosParaCodificar={numero} formato="chico" />
      </article>
    </section>
  );
}
