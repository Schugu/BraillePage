import { useState } from "react";
import NumToBraille from "../components/codificador/NumToBraille.tsx";
import useWindowResolution from "../hooks/useWindowResolution.tsx";
import Titulo from "../components/Titulo.tsx";

export default function NumsToBraille() {
  const [numero, setNumero] = useState('');
  const resolution = useWindowResolution();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumero(event.target.value);
  };

  return (
    <section className="flex flex-col items-center gap-8 px-2 py-4 text-lg md:text-2xl">
      <Titulo titulo="Codificador de números"/>

      <article className="flex flex-col items-center gap-2">
        <p tabIndex={8} className="text-center">Escriba un número</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <input
            tabIndex={9}
            role="form"
            onChange={handleChange}
            value={numero}
            className="w-full rounded border-2 border-blue-400 p-2 outline-none bg-blue-50"
            type="number"
            placeholder="Ejemplo 123"
            autoComplete="off"
            min="0"
          />
          <button
            tabIndex={10}
            role="button"
            onClick={() => { setNumero('') }}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >Borrar todo</button>
        </div>
      </article>

      <article className="w-full flex justify-center">
        <NumToBraille numerosParaCodificar={numero} formato={resolution} indexProp={11} leerOrdinal={true}/>
      </article>
    </section>
  );
}
