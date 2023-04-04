import { useState } from 'react'
import styles from './style'
import { Navbar, Home, Wrapper, Image, Footer } from './components'
import About from './components/About'

function App() {
  return (
    <Wrapper>
      <div className="bg-transparent w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={` ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>
        <div className={` ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <Image />
          </div>
        </div>
        <div className={` ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
        </div>
      <Footer/>
      </div>
    </Wrapper>
  );
}

export default App
