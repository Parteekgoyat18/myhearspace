import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import Review from '../Componets/Review'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Blogs() {

let blog=[
  {
  image:"7thcomp1img.png",
  head:"3 Main Problems In A Long Distance Relationship",
  parah:"I am two years into a long distance relationship with my boyfriend and it started with apprehension....",
  status:"Relationship",
},
  {
  image:"7thcomp2img.png",
  head:"5 Things to Do To Forget Your Ex ",
  parah:"I scanned my room from left to right - all remnants of our relationship- the teddy he gifted me on ....",
  status:"Brekup",
},
  {
  image:"7thcomp3img.png",
  head:"5 Things To Do When You Are Feeling Lonely",
  parah:"A few days ago I met a friend after long and there was so much to catch up with her. Most post-pandemic ...",
  status:"loneliness",
},
  {
  image:"7compimg4img.png",
  head:"How To Cope Up With A Terrible Breakup?",
  parah:"I met Annie when I was going through the toughest phase of my life. I had just come out of a relationship. After months of going on and off break in that ...click to read more",
  status:"Relationship",
},
  {
  image:"7compimg5img.png",
  head:"The Feeling Of Having No One Special",
  parah:"Reel after reel. Youtube shorts. Reaction video. ASMR. Podcast. Silly podcast. Lifestyle podcast. ‘Seemingly intelligent’ podcast. One episode of a sitcom ...click to read more",
  status:"loneliness",
},
  {
  image:"7compimg6img.png",
  head:"Why Are You Not Able To Sleep After A Breakup?",
  parah:"Months after my breakup, I began taking therapy sessions and some of the few routine questions in those sessions were related to my sleep cycle. I was ask ...click to read more",
  status:"Brekup",
},

]




  return (
    <div className='bg-[#111111]'>
      <Header/>

{/* .......................................... Our Supportive Blogs..................................... */}



<section className='py-[150px] flex flex-col items-center justify-center'>
<div className=' inset-0 text-center mb-20 text-[60px] font-medium text-[#808080] '>Our <span className='text-[#D9D9D9]' >Supportive Blogs</span></div>
<div className='flex flex-wrap items-center justify-center w-full gap-[24px]  '>
  
  { blog.map((item,index)=>
    <div className='flex flex-col  w-[30%]  border-[#464646] border-[1px] rounded-[24px]'>
    <img className=' h-[300px] object-cover overflow-hidden rounded-t-[24px]' src={item.image} alt="" />
    <div className='py-[40px] px-[24px] bg-[#1F1F1F] rounded-b-[24px]'>
    <p className='font-medium text-[24px] text-[#D9D9D9] mb-3'>{item.head}</p>
    <p className='text-[#D9D9D9] text-[18px]'>{item.parah}</p>
    <div className='mt-[35px] flex flex-row items-center justify-between'>
      <p className='text-[#D9D9D9] text-[20px]'>{item.status}</p>
      <Link to="/Blogdesc" className='rounded-[40px] p-4   bg-[#D9D9D9]'>< FaArrowRightLong className='text-[27px] '   /></Link>
    </div>
    </div>
  </div>
)}



</div>

</section>





{/* ....................................................................................................... */}
      <Review/>
      <Footer/>
    </div>
  )
}

export default Blogs
