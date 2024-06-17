
type tituloProp = {
  titulo: string;
}

export default function Titulo({titulo}: tituloProp) {
  return (
    <h1 tabIndex={7} className="w-full border-b-4 border-blue-950 text-3xl md:text-5xl text-center">
      {titulo}
    </h1>
  )
}
