import NumToBraille from "../components/codificador/NumToBraille.tsx";
import CharsToBraille from "../components/codificador/CharsToBraille.tsx";
import ANWWAN from "../components/codificador/AllNumbersWithWordsAndNumbers.tsx";
import useWindowResolution from "../hooks/useWindowResolution.tsx";
import Titulo from "../components/Titulo.tsx";

export default function Numbers() {
  const resolution = useWindowResolution();
  return (
    <section className="flex flex-col items-center gap-8 px-2 py-4 text-lg md:text-2xl">
      <Titulo titulo="Los números" />
      
      <article className="flex flex-wrap gap-2 items-center justify-center">
        <CharsToBraille cadenaParaCodificar="º" formato={resolution} />
        <p tabIndex={8} className="max-w-md text-center sm:text-left">Un signo formado por los puntos 3, 4, 5 y 6. A ese signo se lo denomina SIGNO DE NUMERO.</p>
      </article>

      <article className="flex flex-col gap-2 items-center">
        <p tabIndex={9} className="max-w-5xl text-center">Los dígitos se representan anteponiendo a las diez primeras letras del alfabeto.</p>
        <ANWWAN formato={resolution} />
      </article>

      <article className="w-full flex flex-col gap-6 items-center">
        <p tabIndex={10} className="max-w-6xl text-center">Cuando se necesite escribir cantidades de mas de una cifra, se antepondrá sólo un signo de número a toda la cantidad, sin importar cuántas cifras que lleve.
          El efecto del signo de número para convertir los signos de las letras, en números, termina al dejar un espacio en blanco.
        </p>
        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-20">
          <section className="flex flex-col gap-2 items-center">
            <NumToBraille formato={resolution} numerosParaCodificar="26" />
            <p tabIndex={11}>26</p>
          </section>
          <section className="flex flex-col gap-2 items-center">
            <NumToBraille formato={resolution} numerosParaCodificar="4053317" />
            <p tabIndex={12}>4.053.317</p>
          </section>
        </div>
      </article>
    </section>
  )
}
