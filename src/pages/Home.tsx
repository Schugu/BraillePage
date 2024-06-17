import CharsToBraille from "../components/codificador/CharsToBraille.tsx";
import CharToBrailleWithNumbers from "../components/codificador/CharToBrailleWithNumbers.tsx";
import useWindowResolution from "../hooks/useWindowResolution.tsx";
import Titulo from "../components/Titulo.tsx";

export default function Home() {
  const resolution = useWindowResolution();
  return (
    <section className="flex flex-col items-center gap-8 px-2 py-4 text-xl">
      <Titulo titulo="El sistema Braille" />

      <article className="flex flex-col gap-8 md:gap-1">
        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharsToBraille cadenaParaCodificar={"¥"} formato={resolution} indexProp={9}/>
          <p tabIndex={8}
            className="inline-block max-w-lg text-center lg:text-left text-balance self-center"
          >El signo básico del Sistema se denomina SIGNO GENERADOR, y está formado por seis puntos.</p>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharsToBraille cadenaParaCodificar={"Felíz"} formato={resolution} indexProp={11}/>
          <p tabIndex={10}
            className="inline-block max-w-lg text-center lg:text-left text-balance self-center"
          >Combinando de distintas maneras estos seis puntos, pueden representarse todas las letras, los números, los signos, la musicografía, etc.</p>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharToBrailleWithNumbers cadenaParaCodificar={"¥"} formato={resolution} indexProp={17}/>
          <p tabIndex={16}
            className="inline-block max-w-lg text-center lg:text-left text-balance self-center"
          >Para facilitar la identificación de cada punto, cada uno, toma el nombre de un número.</p>
        </div>
      </article>

    </section>
  )
}
