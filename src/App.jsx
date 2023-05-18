import { useState } from 'react'
import styles from './style'
import { Navbar, Home, Wrapper, Image, Footer, Contact, Donate } from './components'
import About from './components/About'

function App() {
  return (
    <Wrapper>
      <div className="bg-transparent w-full overflow-hidden">
        <div className={` ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>
      </div>
      <div className="bg-transparent w-full overflow-hidden">
        <div className={` ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App
