import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OurProjects from './pages/OurProjects'
import Contact from './pages/ContactForm'
import ServiceDetails from './pages/ServiceDetails'
import ContactForm from './pages/ContactForm'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />

          <Route path="/ourprojects" element={<OurProjects />} />
          <Route path="/contact" element={<><Contact /> <ContactForm/></>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
