import SignoBrailleConLetra from "../components/codificador/SignoBrailleConLetra.tsx";

export default function Alphabet() {
  return (
    <section className="flex flex-col items-center gap-8 p-2 text-2xl">
      <h1 className="w-full border-b-4 border-orange-600 text-5xl text-center">El alfabeto</h1>

      <article className="flex flex-col gap-2 items-center">
        <SignoBrailleConLetra cadenaParaCodificar="abcdefghij" formato="mediano" />
        <p className="text-center text-balanece w-3/4">
          Las primeras diez combinaciones, que representan las diez primeras letras del
          alfabeto, ocupan sólo los cuatro puntos superiores del signo generador.
          Este grupo de signos, se denomina PRIMERA SERIE.
        </p>
      </article>

      <article className="flex flex-col gap-2 items-center">
        <SignoBrailleConLetra cadenaParaCodificar="klmnopqrst" formato="mediano" />
        <p className="text-center text-balanece w-3/4">
          Cada una de las siguientes diez combinaciones, agrega a las de la primera serie,
          el punto número 3. Este grupo de signos, se denomina SEGUNDA SERIE.
        </p>
      </article>

      <article className="flex flex-wrap justify-center gap-2">
        <div className="max-w-lg flex flex-col gap-2 items-center">
          <SignoBrailleConLetra cadenaParaCodificar="uvxyz" formato="mediano" />
          <p className="text-center text-balanece">
            Las siguientes cinco combinaciones, agregan el punto número 6, a las de la
            segunda serie. Este grupo de signos, se denomina TERCERA SERIE.
          </p>
        </div>

        <div className="max-w-64 flex flex-col gap-2 items-center">
          <SignoBrailleConLetra cadenaParaCodificar="ñw" formato="mediano" />
          <p className="text-center text-balanece">
            Estas dos letras, completan el alfabeto.
          </p>
        </div>
      </article>

      <article className="flex flex-wrap justify-center gap-8">
        <div className="max-w-lg flex flex-col gap-2 items-center">
          <SignoBrailleConLetra cadenaParaCodificar="áéíóú" formato="mediano" />
          <p className="text-center text-balanece">
            Vocales con acento.
          </p>
        </div>

        <div className="max-w-xl flex flex-col gap-2 items-center">
          <SignoBrailleConLetra cadenaParaCodificar=" .,;:-" formato="mediano" />
          <p className="text-center text-balanece">
            Caracteres Especiales.
          </p>
        </div>
      </article>


    </section>
  )
}
