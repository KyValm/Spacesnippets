import { useState } from 'react'
import styles from './style'
import { Navbar, Home,StarryNight } from './components'
import About from './components/About'

const App = () => {
  
  return (
    <div className="bg-transparent w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={` ${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Home/>
        </div>
      </div>
      <div className={` ${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <About/>
        </div>
      </div>
      <StarryNight/>
    </div>
  )
}

export default App
