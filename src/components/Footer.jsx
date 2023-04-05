import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center w-full bg-navcolor bottom-0 h-[50px] z-[50] text-sm py-4
    sm:text-center sm:py-3 sm:flex-col'>
        <p className='m-0'>
        &copy; {new Date().getFullYear()} Kynoa Valmonte

        </p>
    </footer>
  )
}

export default Footer