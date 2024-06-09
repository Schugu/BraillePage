import CharsToBraille from "../components/codificador/CharsToBraille.tsx";
import CharToBrailleWithNumbers from "../components/codificador/CharToBrailleWithNumbers.tsx";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col items-center gap-8 p-2">
      <h1 className="w-full border-b-4 border-orange-600 text-5xl text-center">El sistema Braille</h1>

      <article className="flex flex-col gap-1 text-2xl">
        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharsToBraille cadenaParaCodificar={"¥"} formato="grande" />
          <p className="inline-block max-w-lg text-left text-balance self-center">El signo básico del Sistema se denomina SIGNO GENERADOR, y está formado por seis puntos.</p>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharsToBraille cadenaParaCodificar={"Felíz"} formato="grande" />
          <p className="inline-block max-w-lg text-left text-balance self-center">Combinando de distintas maneras estos seis puntos, pueden representarse todas las letras, los números, los signos, la musicografía, etc.</p>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <CharToBrailleWithNumbers cadenaParaCodificar={"¥"} formato="grande" />
          <p className="inline-block max-w-lg text-left text-balance self-center">Para facilitar la identificación de cada punto, cada uno, toma el nombre de un número.</p>
        </div>
      </article>

    </section>
  )
}
