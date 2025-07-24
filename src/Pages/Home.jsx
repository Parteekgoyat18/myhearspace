import { useState } from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Header from '../Componets/Header';
import Footer from '../Componets/Footer';
import Review from '../Componets/Review';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Home() {

  
const [openIndex,setOpenIndex] = useState();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


let doyoufell=[
  {image:"/2ndcompimgimg.png",
text:"43% of Indian’s are Facing Loneliness!"
},
{image:"/2ndcomp2img.png",
text:"46.45% of Indian’s are Facing Breakups"
},
{image:"/2ndcomp3img.png",
text:"68% of Indian’s are Facing Relationship issues"
},
]

let usersay =[
  {paragraph:" I've never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel."
},
  {paragraph:" I was hesitant at first, but this app has been a game-changer for me. The listeners are professional and empathetic, and it’s helped me process my emotions in a healthy way."
},
  {paragraph:" This platform has truly been a lifesaver for me. Talking to someone who listens without judgment made such a huge difference in my life. I always leave the sessions feeling lighter and more positive. "
},
]

let caringlist=[
  {image:"4thcompimgimg.png",
    Age:"23",
    Name:"Mohit",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
},
  {image:"4thcomp2img.png",
    Age:"26",
    Name:"Simran",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
},
  {image:"4thcomp3img.png",
    Age:"25",
    Name:"Anushka",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
},
]

let blogs=[
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

]


let faq =[
  {
    que:"What is My Hear Space?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  {
    que:"Is my identity kept private?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  {
    que:"What are the charges for using the service?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  {
    que:"Are the listeners professionals?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  {
    que:"How do I become a listener?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  {
    que:"Can I request a specific listener for my session?",
    ans:"My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment.",
  },
  
]



  return (
    <div className='bg-[#111111]'>
      {/* **********************************navbar***************************************** */}

<Header/>

{/* *********************************************Your Safe Space to Share.....************************************ */}

<section className='relative pt-[100px]'>
  <img className='hidden md:block' src="/BGimage.png" alt="" srcset="" />
  <img className='mt-[100px] w-full sm:hidden inline' src="/sm-safe-space.png" alt="" />
  <div className='absolute inset-0 mt-[100px] items-center flex flex-col gap-14 md:top-24 top-[50px]'>
  <div className="text-[#808080] md:text-6xl text-[36px] text-center font-medium">Your Safe Safe Space to&nbsp;<span class="text-[#D9D9D9]">Share.....</span></div>
  <div className='text-[22px] text-[#808080] text-center'>Share anything with us and get support  through&nbsp;<span class="text-[#D9D9D9]">call, chat, or <br/> video call</span>,&nbsp;anytime you need.</div>
<div class="p-[2px] rounded-full bg-gradient-to-b from-white to-[#141414] w-fit shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
  <button class="md:text-[22px] text-[18px] text-white py-3 px-10 w-fit rounded-full bg-[#141414]">
    Connect Now
  </button>
</div>
  </div>
</section>


{/* ..........................................Do You Feel You arw the Onlu One?..................................... */}

<section className='md:py-40 py-[110px]'>
  <div className='inset-0 md:pt-32 text-center md:text-[60px] text-[35px] font-medium text-[#808080]'>
    Do you feel you are the <br />
    <span className='text-[#D9D9D9]'>Only One?</span>
  </div>

{/* Mobile slider - full background image in each card */}
<div className="sm:hidden w-full px-2 mt-[50px]">
  <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    slidesPerView={1}
    className="w-full"
  >
    {doyoufell.map((item, index) => (
      <SwiperSlide key={index}>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div
            className="w-[90%] mx-auto h-[400px] rounded-xl shadow-lg bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{ backgroundImage: "url('/2ndcompimage.png')" }}
          >
            {/* Foreground character image */}
            <img
              src={item.image}
              alt="Character"
              className="w-[230px] h-[230px] object-contain mb-20 mt-[-30px]"
            />
            {/* Text */}
            <p className="text-white text-[20px] font-medium leading-tight">
              {item.text}
            </p>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Large Screen Layout (original) */}
<div className="hidden sm:flex gap-[24px] justify-center items-center">
  {doyoufell.map((item, index) => (
    <motion.div
      key={index}
      initial={{ x: index === 0 ? 100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative pt-[80px] w-[400px] mx-auto">
        <img className="w-full mx-auto" src="/2ndcompimage.png" alt="" />
        <div className="absolute inset-0 flex justify-center mt-32">
          <img className="w-[310px] h-[270px] object-fit" src={item.image} alt="" />
        </div>
        <div className="absolute px-4 inset-0 flex justify-center items-center pt-[500px] text-[32px] font-medium text-center text-[#D9D9D9]">
          {item.text}
        </div>
      </div>
    </motion.div>
  ))}
</div>

</section>


{/* ............................................The One Stop Solution........................................... */}


<section className='flex md:p-20 p-2 bg-[#1F1F1F]'>
<div className='md:w-[50%] w-full'> 
  <div className='text-[#808080] text-[48px] font-medium'>The One Stop <span className='text-[#D9D9D9]'>Solution</span></div>
  <div className='w-[92%] bg-[#808080] h-[1px] my-7'/>
  <div className='text-[24px] text-[#D9D9D9]'>At My Hear Space, we believe everyone deserves a safe space to share their feelings. Our mission is to connect you with compassionate listeners who are here to support and understand you.</div>
  <div className='text-[32px] text-[#808080] mt-14'>What can you <span className='text-[#D9D9D9]'>Expect</span></div>
  <div className='space-y-2 my-6'>
    <div className='flex items-center gap-4'>
       <IoCheckmarkCircle className='text-[#D9D9D9] text-[27px]' /> <p className='text-[#D9D9D9] text-[24px]'>Complete Anonymity.</p>
    </div>
    <div className='flex items-center gap-4'>
       <IoCheckmarkCircle className='text-[#D9D9D9] text-[27px]' /> <p className='text-[#D9D9D9] text-[24px]'>Safe Sharing.</p>
    </div>
    <div className='flex items-center gap-4'>
       <IoCheckmarkCircle className='text-[#D9D9D9] text-[27px]' /> <p className='text-[#D9D9D9] text-[24px]'>Communication in multiple languages</p>
    </div>
    <div className='flex items-center gap-4'>
       <IoCheckmarkCircle className='text-[#D9D9D9] text-[27px]' /> <p className='text-[#D9D9D9] text-[24px]'>Stress free Conversation.</p>
    </div>
    <div className='flex items-center gap-4'>
       <IoCheckmarkCircle className='text-[#D9D9D9] text-[27px]' /> <p className='text-[#D9D9D9] text-[24px]'>Talk Anytime, Anywhere.</p>
    </div>
  </div>
</div>
<img className='w-[50%] hidden md:block' src="/3rdcomgimg.png" alt="" />
</section>


{/* ...............................................Meet Our Caring Listeners..................................... */}


<div className="text-white flex flex-col py-24 md:gap-16 gap-5 items-center justify-center p-4">
  <div className="inset-0 text-center md:text-[60px] text-[35px]  font-medium text-[#808080]">
    Meet Our Caring <span className="text-[#D9D9D9]">Listeners</span>
  </div>

  {/* ✅ Mobile slider version */}
  <div className="sm:hidden w-full px-4">
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={1}
      className="w-full mt-5"
    >
      {caringlist.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-[url('/4thcompimg.png')] bg-cover bg-center rounded-3xl px-2 pb-12 pt-7 text-center relative shadow-lg w-full max-w-[95%] "
          >
            <div className="flex justify-center mb-3 relative">
              <img
                src={item.image}
                alt="Profile"
                className="w-[180px] h-[180px] rounded-full object-cover mt-5"
              />
              <div className="absolute bottom-4 translate-y-1/2 bg-gray-700 text-white px-6 py-1 rounded-full text-sm">
                M - {item.Age} yrs
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2 pt-24">{item.Name}</h2>
            <p className="text-[#808080] text-[18px] mt-6 mb-5">{item.para}</p>
            <Link to='/ourListener' className="bg-white text-[16px] text-black mt-4 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
              Connect Now
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* ✅ Desktop layout (unchanged) */}
  <div className="hidden sm:flex w-full gap-[24px] px-[100px]">
    {caringlist.map((item, index) => (
      <div
        key={index}
        className="bg-[url('/4thcompimg.png')] w-[35%] bg-cover bg-center rounded-3xl p-6 text-center relative shadow-lg"
      >
        <div className="flex justify-center mb-4 relative">
          <img
            src={item.image}
            alt="Profile"
            className="w-[220px] h-[220px] rounded-full object-cover mt-7"
          />
          <div className="absolute bottom-4 translate-y-1/2 bg-gray-700 text-white px-7 py-2 rounded-full text-sm">
            M - {item.Age} yrs
          </div>
        </div>
        <h2 className="text-4xl font-semibold mb-4 pt-32">{item.Name}</h2>
        <p className="text-[#808080] text-[20px] mt-8 mb-8">{item.para}</p>
        <div className='mb-6'>
        <Link to='/ourListener' className="bg-white text-[18px] text-black mb-5 font-medium py-3 px-8 rounded-full hover:bg-gray-200 transition shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
          Connect Now
        </Link>
        </div>
        
      </div>
    ))}
  </div>

  {/* Button stays common */}
  <div className="p-[2px] rounded-full bg-gradient-to-b from-white to-[#141414] w-fit shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)] mt-10">
    <button className="md:text-[28px] text-[18px] text-white py-3 px-10 w-fit rounded-full bg-[#141414]">
      View All Listeners
    </button>
  </div>
</div>

{/* ..............................................What Our Users Say........................................ */}


<section className="bg-[#1F1F1F] md:py-[140px] py-[80px]">
  {/* Title */}
  <div className="inset-0 text-center mb-20 md:text-[60px] text-[35px] font-medium text-[#808080]">
    What Our <span className="text-[#D9D9D9]">Users Say</span>
  </div>

  {/* ✅ Mobile slider version */}
  <div className="sm:hidden w-full px-4">
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={1}
      className="w-full"
    >
      {usersay.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#464646] text-[#D9D9D9] rounded-[24px] px-5 py-14 text-[18px] w-full max-w-[95%]">
            <div className="flex pb-6 text-[26px] justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} className="text-[#D9D9D9]" />
              ))}
            </div>
            {item.paragraph}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* ✅ Desktop version (unchanged) */}
  <div className="hidden sm:flex w-full gap-[24px] px-[100px]">
    {usersay.map((item, index) => (
      <div
        key={index}
        className="bg-[#464646] text-[#D9D9D9] w-[35%] rounded-[24px] text-[20px] px-[24px] py-[60px]"
      >
        <div className="flex pb-8 text-[30px] justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <IoIosStar key={i} className="text-[#D9D9D9]" />
          ))}
        </div>
        {item.paragraph}
      </div>
    ))}
  </div>
</section>



{/* ..........................................Our App is Featured In............................................. */}


<section className='py-24 md:py-48'>
  <div className='text-center mb-12 md:mb-20 text-4xl md:text-[60px] font-medium text-[#808080]'>
    Our App is <span className='text-[#D9D9D9]'>Featured In</span>
  </div>

  <div className='mx-6 md:mx-24 text-[#464646] flex flex-col md:flex-row bg-[#1F1F1F] rounded-[24px] overflow-hidden'>
    
    {/* Image on top for small screens */}
    <img 
      className='w-full h-[250px] md:w-[50%] md:h-[600px] object-cover md:order-2' 
      src="6thcompimg.png" 
      alt="Times of India Feature" 
    />

    {/* Text Content */}
    <div className='p-8 md:p-[60px] w-full md:w-[50%]'>
      <p className='font-bold text-[48px] md:text-[80px] mb-4 md:mb-[16px]'>01</p>
      <p className='text-[#D9D9D9] text-[32px] md:text-[48px] font-medium mb-4 md:mb-5'>Times of India</p>
      <p className='text-[#D9D9D9] text-lg md:text-[24px]'>
        We're thrilled to share that My Hear Space has been featured in The Times of India, one of India's most trusted and renowned publications! This recognition highlights our mission to provide a safe, supportive platform where you can share, heal, and grow.
      </p>
    </div>

  </div>
</section>





{/* .......................................... Our Supportive Blogs..................................... */}



<section className="md:py-[150px] py-[50px] flex flex-col items-center justify-center">
  {/* Title */}
  <div className="inset-0 text-center mb-20 md:text-[60px] text-[35px] font-medium text-[#808080]">
    Our <span className="text-[#D9D9D9]">Supportive Blogs</span>
  </div>

  {/* ✅ Mobile Slider */}
  <div className="sm:hidden w-full px-4">
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={1}
      className="w-full"
    >
      {blogs.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col w-full border-[#464646] border-[1px] rounded-[24px] overflow-hidden">
            <img
              className="h-[240px] object-cover rounded-t-[24px]"
              src={item.image}
              alt=""
            />
            <div className="py-[32px] px-[20px] bg-[#1F1F1F] rounded-b-[24px]">
              <p className="font-medium text-[22px] text-[#D9D9D9] mb-3">
                {item.head}
              </p>
              <p className="text-[#D9D9D9] text-[16px]">{item.parah}</p>
              <div className="mt-[30px] flex flex-row items-center justify-between">
                <p className="text-[#D9D9D9] text-[18px]">{item.status}</p>
                <div className="rounded-[40px] p-3 bg-[#D9D9D9]">
                  <FaArrowRightLong className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* ✅ Desktop version (unchanged) */}
  <div className="hidden sm:flex items-center justify-center w-full gap-[24px]">
    {blogs.map((item, index) => (
      <div
        key={index}
        className="flex flex-col w-[28%] border-[#464646] border-[1px] rounded-[24px]"
      >
        <img
          className="h-[300px] object-cover overflow-hidden rounded-t-[24px]"
          src={item.image}
          alt=""
        />
        <div className="py-[40px] px-[24px] bg-[#1F1F1F] rounded-b-[24px]">
          <p className="font-medium text-[24px] text-[#D9D9D9] mb-3">
            {item.head}
          </p>
          <p className="text-[#D9D9D9] text-[18px]">{item.parah}</p>
          <div className="mt-[40px] flex flex-row items-center justify-between">
            <p className="text-[#D9D9D9] text-[20px]">{item.status}</p>
            <div className="rounded-[40px] p-4 bg-[#D9D9D9]">
              <FaArrowRightLong className="text-[27px]" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Button stays common */}
  <div className="p-[2px] rounded-full bg-gradient-to-b mt-24 from-white to-[#141414] w-fit shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
    <button className="text-[28px] text-white py-3 px-10 w-fit rounded-full bg-[#141414]">
      View All Listeners
    </button>
  </div>
</section>


{/* ........................................Get 50% OFF on your First Recharge................................. */}


<section className='md:py-48 py-[120px] px-3'>
  <div className="md:w-[1200px] md:h-[450px] w-full h-[600px] md:ml-20 md:mx-3 md:p-16 p-2 md:bg-[url('/8thcompbgimg.png')] bg-[url('/sm-recharge.png')] rounded-[40px]  bg-no-repeat bg-cover bg-center flex md:items-center md:justify-between md:gap-24 flex-col md:flex-row">
    
    <div className="flex flex-col gap-4 md:mt-10 mt-5 text-center md:text-left">
      <h1 className="md:text-[60px] text-[32px] text-[#D9D9D9] font-medium">
        Get 50% OFF on your <br /> First Recharge
      </h1>
      <div className="flex md:flex-row items-center justify-center md:justify-start gap-4">
        <img className='md:w-[32%] w-[50%]' src="/8thcompgoogimg.png" alt="Google Play" />
        <img className='md:ml-[-80px] md:w-[32%] ml-[-70px] w-[50%]' src="/8thcompappleimg.png" alt="App Store" />
      </div>
    </div>

    <div className="flex md:mt-6 justify-center">
      <img src="/8thcompphoneimg.png" alt="App Preview" className="md:w-[100%] w-[250px]" />
    </div>
  </div>
</section>




{/* ....................................................FAQS................................................... */}

    <section className=" mb-[200px]">
        <div className=' inset-0 md:text-[44px] text-[32px] ml-[95px] mb-5 font-medium text-[#D9D9D9] flex'>FAQ&nbsp;<span className=' text-[#808080] hidden md:block' > - All You Need to Know</span></div>  
      {faq.map((item, index) => (
        <div key={index} className="md:w-[1200px] p-2  mx-auto text-[#D9D9D9] py-[8px]">
          <div className="bg-[#1F1F1F] rounded-[25px]  shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center md:p-[40px] px-[19px] py-[27px]  text-left font-medium cursor-pointer"
            >
              <span className='md:text-[28px] text-[20px]'>{item.que}</span>
              {openIndex === index ? <FiMinus className='md:text-[30px] text-[20px]' /> : <FaPlus className='md:text-[30px] text-[20px]' />}
            </button>
  {openIndex === index && (
              <div className="px-6 pb-4 pt-2 md:text-[24px] text-[18px] text-[#FFFFFF]">
                {item.ans}
              </div>
            )}
          
          </div>
        </div>
      ))}
    </section>





{/* ..................................................Share Your Review........................................... */}


<Review/>





{/* .......................................................Footer............................................. */}


<Footer footerProp="My Hear Space"/>

    </div>

  )
}

export default Home
