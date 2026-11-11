import { Routes, Route } from 'react-router-dom'

// Import your actual portfolio components
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work, { GraduationProject } from './components/Work'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Import the new assignment document (from the src folder)
import AssignmentDocument from './AssignmentDocument' 

export default function App() {
  return (
    <Routes>
      {/* Route 1: Your Main Public Portfolio */}
      <Route 
        path="/" 
        element={
          <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Nav />
            <main id="main">
              <Hero />
              <GraduationProject />
              <About />
              <Experience />
              <Certifications />
              <Work />
              <Contact />
            </main>
            <Footer />
          </>
        } 
      />

      {/* Route 2: The Hidden Assignment Page */}
      <Route 
        path="/assignment-case-study" 
        element={<AssignmentDocument />} 
      />
    </Routes>
  )
}