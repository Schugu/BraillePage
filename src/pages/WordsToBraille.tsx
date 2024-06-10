import { useState } from "react";
import CharsToBraille from "../components/codificador/CharsToBraille";

export default function WordsToBraille() {
  const [palabra, setPalabra] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPalabra(event.target.value);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-2 text-2xl">
      <h1 className="w-full border-b-4 border-blue-950 text-3xl md:text-5xl text-center">
        Codificador de palabras
      </h1>

      <article className="flex flex-col items-center gap-2">
        <p className="text-center">Escriba una palabra</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <input
            onChange={handleChange}
            value={palabra}
            className="w-full rounded border-2 border-blue-400 p-2 outline-none"
            type="text"
            placeholder="Hola"
            autoComplete="off"
          />
          <button
            onClick={() => { setPalabra('') }}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >Borrar todo</button>
        </div>
      </article>

      <article className="w-full flex justify-center">
        <CharsToBraille cadenaParaCodificar={palabra} formato="chico" />
      </article>
    </section>
  );
}
