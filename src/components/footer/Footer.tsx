
export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center gap-6 p-2 bg-black border-t-2 border-orange-600 text-white">
      <a href="#"
        className="flex justify-center items-end gap-2 hover:text-yellow-500">
        <span className="w-8 h-8 icon-[bx--up-arrow-circle]"></span>
        <p className="text-2xl">Arriba</p>
      </a>
      <a href="https://github.com/Schugu" target="_blank"
        className="flex justify-center items-end gap-2 hover:text-yellow-500">
        <span className="w-8 h-8 icon-[mdi--github]"></span>
        <p className="text-2xl">Github</p>
      </a>
      <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank"
        className="flex justify-center items-end gap-2 hover:text-yellow-500">
        <span className="w-8 h-8 icon-[mdi--linkedin]"></span>
        <p className="text-2xl">Linkedin</p>
      </a>
    </footer>
  )
}
