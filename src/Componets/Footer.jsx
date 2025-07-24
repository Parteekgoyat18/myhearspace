import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer({footerProp}) {

  const [currentColor, setCurrentColor] = useState("#D9D9D9")

const initialRef = useRef("Hear")
  useEffect(() => {

    setTimeout(() => {
      setCurrentColor("#c43535")

      initialRef.current = "space"

    }, 1000);
}, [])

console.log()
  return (
    <div>
      <footer className=''>
      <div className='relative '>
        <img className='hidden md:block' src="footerbgimg.png" alt="" />
        <img className='h-full w-full sm:hidden inline' src="small-footer.png" alt="" />
        <div className='absolute inset-0 flex flex-col gap-5 items-center justify-center'>
        <img className='md:w-[180px] md:h-[180px] h-[100px] w-[100px]' src="myhearspace.png" alt="" />
        <div className={`md:text-[40px] text-[32px] text-[${currentColor}] font-medium `}>{footerProp}</div>
        <div className='text-[#808080] md:text-[26px] text-[16px]'>Your safe place to <span className='text-[#D9D9D9]'>Share, Heal & Transform</span></div>
        <div className='hidden md:flex gap-10 my-[80px] text-[28px]'>
          <Link to="/" href="#" class="hover:text-gray-400 text-[#D9D9D9]">Home</Link>
          <Link to="/ourListener"  href="#" class="hover:text-gray-400 text-[#808080]">Our Listeners</Link>
          <Link to="/blogs" href="#" class="hover:text-gray-400 text-[#808080]">Blogs</Link>
          <p className='text-[#808080]'>Become a Listener</p>
          </div>
          <div className='flex md:gap-10 bg-red-600 '>
            <FaFacebook className='text-white w-[45px] h-[45px]'/>
            <FaInstagramSquare className='text-white w-[45px] h-[45px]' />
            <FaSquareXTwitter className='text-white w-[45px] h-[45px]'/>
            <FaWhatsappSquare className='text-white w-[45px] h-[45px]'/>
            <FaYoutubeSquare className='text-white w-[45px] h-[45px]'/>
            <FaLinkedin className='text-white w-[45px] h-[45px]'/>
          </div>
        </div>
      
      </div>
      </footer>
    </div>
  )
}

export default Footer
