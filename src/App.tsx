import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import Alphabet from "./pages/Alphabet.tsx";
import Numbers from "./pages/Numbers.tsx";
import Keyboard from "./pages/keyboard/Keyboard.tsx";
import WordsToBraille from "./pages/WordsToBraille.tsx";
import NumsToBraille from "./pages/NumsToBraille.tsx";


export default function App() {
  return (
    <BrowserRouter>

      <main className='flex flex-col min-h-screen bg-DURAZNO-light'>
        <Header />

        <section className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path='/alphabet' element={<Alphabet />} />
            <Route path='/numbers' element={<Numbers />} />
            <Route path='/keyboard' element={<Keyboard />} />
            <Route path='/wordsToBraille' element={<WordsToBraille />} />
            <Route path='/numsToBraille' element={<NumsToBraille />} />

          </Routes>
        </section>

        <Footer />
      </main>

    </BrowserRouter>
  )
}
