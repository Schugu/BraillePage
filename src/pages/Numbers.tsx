import NumToBraille from "../components/codificador/NumToBraille.tsx";
import CharsToBraille from "../components/codificador/CharsToBraille.tsx";
import ANWWAN from "../components/codificador/AllNumbersWithWordsAndNumbers.tsx";


export default function Numbers() {
  return (
    <section className="w-full h-full flex flex-col items-center gap-8 p-2 text-2xl">
      <h1 className="w-full border-b-4 border-orange-600 text-5xl text-center">Los números</h1>

      <article className="flex flex-wrap gap-2 items-center">
        <CharsToBraille cadenaParaCodificar="º" formato="mediano"/>
        <p className="max-w-md">Un signo formado por los puntos 3, 4, 5 y 6. A ese signo se lo denomina SIGNO DE NUMERO.</p>
      </article>

      <article>
        <ANWWAN formato="chico"/>
      </article>



      <NumToBraille formato="chico" numerosParaCodificar="1000102" />
    </section>
  )
}
