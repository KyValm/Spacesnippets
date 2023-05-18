import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import './index.css'
import { Contact, Image, Navbar,Footer, About, StarryNight } from './components'


const Layout = ({children}) => (
  <>
    <Navbar />
    <StarryNight />
    <div className="flex flex-col items-center justify-center flex-grow">
      {children}
    </div>
    <Footer />
  </>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/images" element={<Image/>} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
);