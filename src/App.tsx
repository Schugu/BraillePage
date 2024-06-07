import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

export default function App() {
  return (
    <BrowserRouter>

      <main className='flex flex-col min-h-screen bg-DURAZNO-light'>
        <Header />
        <section className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </section>
        <Footer />
      </main>

    </BrowserRouter>
  )
}
