import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import Alphabet from "./pages/Alphabet.tsx";
import Numbers from "./pages/Numbers.tsx";


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

          </Routes>
        </section>

        <Footer />
      </main>

    </BrowserRouter>
  )
}
