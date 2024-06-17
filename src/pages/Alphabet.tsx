import CharToBrailleWithChar from "../components/codificador/CharToBrailleWithChar.tsx";
import useWindowResolution from "../hooks/useWindowResolution.tsx";
import Titulo from "../components/Titulo.tsx";
export default function Alphabet() {
  const resolution = useWindowResolution();

  return (
    <section className="flex flex-col items-center gap-8 px-2 py-4 text-lg md:text-2xl">
      <Titulo titulo="El alfabeto" />

      <article className="flex flex-col gap-2 items-center">
        <CharToBrailleWithChar cadenaParaCodificar="abcdefghij" formato={resolution} indexProp={9}/>
        <p tabIndex={8} className="text-center text-balanece w-3/4">
          Las primeras diez combinaciones, que representan las diez primeras letras del
          alfabeto, ocupan sólo los cuatro puntos superiores del signo generador.
          Este grupo de signos, se denomina PRIMERA SERIE.
        </p>
      </article>

      <article className="flex flex-col gap-2 items-center">
        <CharToBrailleWithChar cadenaParaCodificar="klmnopqrst" formato={resolution} indexProp={21}/>
        <p tabIndex={20} className="text-center text-balanece w-3/4">
          Cada una de las siguientes diez combinaciones, agrega a las de la primera serie,
          el punto número 3. Este grupo de signos, se denomina SEGUNDA SERIE.
        </p>
      </article>

      <article className="flex flex-wrap justify-center gap-2">
        <div className="max-w-lg flex flex-col gap-2 items-center">
          <CharToBrailleWithChar cadenaParaCodificar="uvxyz" formato={resolution} indexProp={31}/>
          <p tabIndex={30} className="text-center text-balanece">
            Las siguientes cinco combinaciones, agregan el punto número 6, a las de la
            segunda serie. Este grupo de signos, se denomina TERCERA SERIE.
          </p>
        </div>

        <div className="max-w-64 flex flex-col gap-2 items-center">
          <CharToBrailleWithChar cadenaParaCodificar="ñw" formato={resolution} indexProp={41}/>
          <p tabIndex={40} className="text-center text-balanece">
            Estas dos letras, completan el alfabeto.
          </p>
        </div>
      </article>

      <article className="flex flex-wrap justify-center gap-8">
        <div className="max-w-lg flex flex-col gap-2 items-center">
          <CharToBrailleWithChar cadenaParaCodificar="áéíóú" formato={resolution} indexProp={51}/>
          <p tabIndex={50} className="text-center text-balanece">
            Vocales con acento.
          </p>
        </div>

        <div className="max-w-xl flex flex-col gap-2 items-center">
          <CharToBrailleWithChar cadenaParaCodificar=" .,;:-" formato={resolution} indexProp={61}/>
          <p tabIndex={60} className="text-center text-balanece">
            Caracteres Especiales.
          </p>
        </div>
      </article>


    </section>
  )
}
