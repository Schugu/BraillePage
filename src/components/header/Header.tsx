import LinkSection from "./LinkSection.tsx";

export default function Navbar() {
  return (
    <section className="flex flex-wrap items-center gap-2 justify-between p-2 
    bg-blue-950 text-white text-xl">
      <LinkSection LinkTo="/" Icon="w-9 h-9 icon-[cil--braille]" Label="BraillePage" />

      <LinkSection LinkTo="/alphabet" Icon="w-10 h-10 icon-[mdi--alphabetical-variant]" Label="El alfabeto" />
      <LinkSection LinkTo="/numbers" Icon="w-10 h-10 icon-[mdi--numeric]" Label="Los números" />
      <LinkSection LinkTo="/keyboard" Icon="w-8 h-8 icon-[mdi--keyboard-outline]" Label="Teclado" />
      <LinkSection LinkTo="/wordToBraille" Icon="w-8 h-8 icon-[arcticons--braille-de]" Label="Codificador de palabras" />
      <LinkSection LinkTo="/numberToBraille" Icon="w-8 h-8 icon-[arcticons--braille-de]" Label="Codificador de números" />
    </section>
  )
}
