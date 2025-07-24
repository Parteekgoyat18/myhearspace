import React from 'react'
import { IoIosStar } from 'react-icons/io'

function Review() {
  return (
    <div className='bg-[#111111] hidden md:block'>
      <section className='pb-[200px]'>
           <div className=' inset-0 text-center mb-[80px] text-[60px] font-medium text-[#808080] '>Share Your <span className='text-[#D9D9D9]' >Review</span></div>
      
      
           <div className='flex text-[#D9D9D9] mx-[80px] border-[#464646] border-[1px] w-[1200px] h-[800px] rounded-[25px]'>
            <div className='p-[40px] w-[52%]'>
            <div className='text-[28px] mb-4'>How would you Rrate it?</div>
            <div className='flex text-[61px] gap-[9px]'><IoIosStar className='text-[#D9D9D9]'/><IoIosStar className='text-[#D9D9D9] '/><IoIosStar className='text-[#D9D9D9] '/><IoIosStar className='text-[#D9D9D9] '/><IoIosStar className='text-[#D9D9D9] '/></div>
      
            <div className='mt-[40px] text-[28px]'>
              <div className='mb-4'>Your Experience in one word</div>
              <div className='flex items-center'>
              <input className='w-6 h-6 mr-3' type="radio" name="" id="" /><span className='mr-12 text-[23px]'>Great!</span>
              <input className='w-6 h-6 mr-3' type="radio" name="" id="" /><span className='mr-12 text-[23px]'>Was OK</span>
              <input className='w-6 h-6 mr-3' type="radio" name="" id="" /><span className='mr-12 text-[23px]'>Bad</span>
              </div>
            </div>
      
      
            <div className='mt-10'>
              <div className='flex justify-between text-[24px] mb-5'><p>Feedback</p><p className='text-[20px] text-[#808080]'>(Optional)</p></div>
              <textarea name="" id="" className='w-[550px] h-[250px] text-[20px] text-[#808080] p-[16px] rounded-[20px] bg-[#1F1F1F]'>Can you share more...</textarea>
            </div>
      
              <div class="p-[2px] rounded-full bg-gradient-to-b mt-9  from-white to-[#141414] w-fit shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
        <button class="text-[28px] text-[#D9D9D9] py-3 px-10 w-fit rounded-full bg-[#141414]">
          Submit Review
        </button>
        </div>
            </div>
      
            <div className='bg-[#1F1F1F] w-[48%] content-center items-center'>
              <img className='w-[365px] h-[425px] ml-[85px]' src="/10compimg.png" alt="" />
            </div>
            </div>
      
      </section>
    </div>
  )
}

export default Review
