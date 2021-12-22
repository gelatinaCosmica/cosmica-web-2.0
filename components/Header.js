import Image from 'next/image'
import { useState, useEffect } from 'react'
import CosmicPixelLogoSVGorizontal from '../public/logo/cosmic-pixel_logo_h.svg'
import pdf from '../static/Santiago_Zapata_CV.pdf'

const headerStyles = [
  'flex',
  'z-50',
  'shadow-sm',
  'py-4',
  'lg:px-2',
  'justify-between',
  'top-0',
  'min-w-full',
  'bg-bg',
  'bg-opacity-70',
  'backdrop-blur-md'
]
const strStyles = headerStyles.join(' ').toString()

function Header() {
  const [show, setShow] = useState(true)
  const controlNav = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNav)
    return () => {
      window.removeEventListener('scroll', controlNav)
    }
  }, [])

  const onResumeClick = () => {
    window.open(pdf);
  }

  return (
    <header className={`fixed flex z-50 shadow-sm py-4 lg:px-2 justify-between top-0 min-w-full bg-bg bg-opacity-70 backdrop-blur-md`}>
      <nav className="mx-8 lg:mx-10 flex justify-between relative w-full max-w-auto">
        {/** Logo */}
        <div className="flex justify-start lg:h-16 w-32 lg:w-36 items-center cursor-pointer">
          <Image
            src={CosmicPixelLogoSVGorizontal}
            alt="Cosmica Logo"
            layout=''
            objectFit='contain'
            objectPosition="left"
          />
        </div>

        {/** Nav Items */}
        <div className="hidden space-x-8 justify-end items-center navItem lg:inline-flex z-40">
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">01.</p>
            <p className="text-gray-300 hover:text-orange-text">About</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">02.</p>
            <p className="text-gray-300 hover:text-orange-text">Experience</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">03.</p>
            <p className="text-gray-300 hover:text-orange-text">Work</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">04.</p>
            <p className="text-gray-300 hover:text-orange-text">Contact</p>
          </div>
          <a onClick={onResumeClick} without rel="noopener noreferrer" target="_blank">
            <button className="border border-orange-border text-orange-text px-5 py-2.5 rounded-lg hover:bg-orange-bg hover:bg-opacity-20 transition duration-200 ease-out">Resume</button>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header