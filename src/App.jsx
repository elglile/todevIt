import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OurProjects from './pages/OurProjects'
import ServiceDetails from './pages/ServiceDetails'
import ContactForm from './pages/ContactForm'
import Contact from './pages/Contact'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './PageTransition'
function App() {
        const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="min-h-screen">
            <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:title" element={<PageTransition><ServiceDetails /></PageTransition>} />

          <Route path="/ourprojects" element={<PageTransition><OurProjects /></PageTransition>} />
          <Route path="/contact" element={<><PageTransition><Contact /></PageTransition></>} />
        </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
