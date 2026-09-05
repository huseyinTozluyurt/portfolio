import { Routes, Route } from 'react-router-dom'

// Import your actual portfolio components
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

// Import the new assignment document (from the src folder)
import AssignmentDocument from './AssignmentDocument' 

export default function App() {
  return (
    <Routes>
      {/* Route 1: Your Main Public Portfolio */}
      <Route 
        path="/" 
        element={
          <main>
            <Hero />
            <About />
            <Work />
            <Contact />
          </main>
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