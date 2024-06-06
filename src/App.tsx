import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

export default function App() {
  return (
    <BrowserRouter>

      <main className='flex flex-col min-h-screen bg-DURAZNO-light'>
        <Navbar></Navbar>
        <section className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </section>
      </main>

    </BrowserRouter>
  )
}
