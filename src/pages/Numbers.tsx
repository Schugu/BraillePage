import SignoNumBraille from "../components/codificador/SignoNumBraille.tsx";

export default function Numbers() {
  return (
    <div>
      <SignoNumBraille formato="chico" numerosParaCodificar="1000102"/>
    </div>
  )
}
