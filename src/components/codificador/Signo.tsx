import { letrasBraille } from "./signosBraille.js";

export default function Signo({ cadenaParaCodificar }) {
  const cadenaSeparada = cadenaParaCodificar.toLowerCase().split("");

  // Almacenar los elementos JSX en una variable
  const elementosBraille = cadenaSeparada.map((caracter, index) => {
    if (caracter in letrasBraille) {
      return (
        <article key={caracter} className="w-14 h-20 grid grid-rows-3 grid-cols-2 cursor-grab gap-2 p-1.5
        bg-white hover:bg-gray-200 border border-black shadow-md transition-colors duration-150">
          {
            letrasBraille[caracter].map((punto, puntoIndex) => (
              <span key={puntoIndex} className={`${punto === 1 ? '' : 'bg-opacity-10'} bg-black rounded-full cursor-grab shadow-md`}></span>
            ))
          }
        </article>
      );
    } else {
      return null;
    }
  });


  return (
    <section className="flex flex-wrap">
      {elementosBraille}
    </section>
  );
}
