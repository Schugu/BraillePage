import LinkSection from "./LinkSection.tsx";

export default function Navbar() {
  return (
    <section className="flex flex-wrap items-center gap-2 justify-center xl:justify-between p-2
    bg-blue-950 text-white text-xl" id="header">
      <LinkSection LinkTo="/" Icon="w-9 h-9 icon-[cil--braille]" Label="BraillePage" tabIndex={1} />

      <LinkSection LinkTo="/alphabet" Icon="w-10 h-10 icon-[mdi--alphabetical-variant]" Label="El alfabeto" tabIndex={2} />
      <LinkSection LinkTo="/numbers" Icon="w-10 h-10 icon-[mdi--numeric]" Label="Los números" tabIndex={3} />
      <LinkSection LinkTo="/keyboard" Icon="w-8 h-8 icon-[mdi--keyboard-outline]" Label="Teclado" tabIndex={4} />
      <LinkSection LinkTo="/wordsToBraille" Icon="w-8 h-8 icon-[arcticons--braille-de]" Label="Codificador de palabras" tabIndex={5} />
      <LinkSection LinkTo="/numsToBraille" Icon="w-8 h-8 icon-[arcticons--braille-de]" Label="Codificador de números" tabIndex={6} />
    </section>
  )
}
