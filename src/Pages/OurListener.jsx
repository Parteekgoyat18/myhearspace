import { IoIosStar } from 'react-icons/io'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Review from '../Componets/Review'
import { Link } from 'react-router-dom'
import { IoLanguageOutline } from "react-icons/io5";

function OurListener() {

let listners=[
  {image:"4thcompimgimg.png",
    Age:"23",
    Name:"Mohit Asnani",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"150",
    rating:"4.5 (120)",
    gender:"M",
},
  {image:"simranimg.png",
    Age:"24",
    Name:"Simran",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"1500+",
    rating:"5.0 (11K+)",
    gender:"F",
},
  {image:"rohitimg.png",
    Age:"23",
    Name:"Rohit",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"2000+",
    rating:"3.5 (400+)",
    gender:"M",
},
  {image:"shilpaimg.png",
    Age:"27",
    Name:"Shilpa",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"1000+",
    rating:"2.0 (1k+)",
    gender:"F",
},
  {image:"shivanshimg.png",
    Age:"27",
    Name:"Shivansh",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"1500+",
    rating:"4.0 (2k+)",
    gender:"M",
},
  {image:"saloniimg.png",
    Age:"20",
    Name:"Saloni",
    para:" I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope....",
    exp:"145+",
    rating:"4.2 (5.2k+)",
    gender:"M",
},
]


  return (
    <div className='bg-[#111111]'> 
      <Header/>
{/* ...................................................................................................... */}

<section className='pt-[180px]'>
  <div className=' inset-0 text-center mb-20 text-[60px] font-medium text-[#808080] '>Meet Our Caring <span className='text-[#D9D9D9]' >Listeners</span></div>
  <div className='flex flex-wrap w-full justify-center gap-6 px-[50px]'>
{listners.map((item,index)=>
  <div className='bg-[#1F1F1F] w-[395px] py-[40px]  px-[24px]  rounded-[16px]'>
    <div className='flex gap-9'>
      <div>
    <img src={item.image} alt="Profile" class=" relative w-[150px] rounded-full object-cover"/>
    <div className='text-[#D9D9D9] bg-[#464646] absolute w-[125px] h-[37px] text-[18px] text-center py-[6px] px-[17px] rounded-[29px] mt-[-23px] ml-4'>{item.gender} - {item.Age} yrs</div>
      </div>
      <div className='flex flex-col'>
      <p className='text-[#D9D9D9] text-[24px]'>{item.Name}</p>
      <div className='flex items-center gap-3'>
      <div className='bg-[#464646] w-[36px] h-[36px] py-[5px] px-[6px] rounded-[100px] mt-4  gap-10'>
      <IoIosStar className='text-[#D9D9D9] w-[24px] h-[24px]'/> 
      </div>
      <div className='text-[#808080] text-[20px] mt-3'>{item.rating}</div>
      </div>

      <div className='flex items-center'>
         <div className='bg-[#464646] w-[36px] h-[36px] py-[5px] px-[6px] rounded-[100px] mt-4  gap-10'>
        <IoLanguageOutline className='text-[#D9D9D9] w-[24px] h-[24px]'/>
      {/* <div className='text-[#808080] text-[20px] mt-3'>Hin, Eng, Guj</div> */}
      </div>
      </div>
     

      </div>

    </div>
    <p className='text-[#808080] mt-[55px] text-[19px]'>I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more</p>

    <div className='mt-[40px] text-[20px] text-[#D9D9D9] flex justify-between items-center'>
      <p className='text-[#D9D9D9]'>Exp - {item.exp} Hrs</p>
          <Link to="/ListnerDesc" state={{item:item}} class="bg-[#D9D9D9] text-[18px] text-black  font-medium py-4 px-6 rounded-full hover:bg-gray-200 transition shadow-[0px_0px_10px_5px_rgba(224,224,224,0.2)]">
      Connect Now
    </Link>
    </div>

  </div>
)}
  </div>


</section>







{/* ........................................Get 50% OFF on your First Recharge................................. */}


<section className='py-48 '>
<div class="w-[1200px] h-[450px] ml-20 p-16 bg-[url('/8thcompbgimg.png')] rounded-[40px] bg-no-repeat bg-cover bg-center flex items-center justify-between gap-24">

  <div class="flex flex-col gap-4 mt-10">
    <h1 class="text-[60px] text-[#D9D9D9] font-medium">
      Get 50% OFF on your <br /> First Recharge
    </h1>
    <div class="flex">
      <img className='w-[316px] h-[170px]' src="/8thcompgoogimg.png" alt="Google Play"/>
      <img className='ml-[-80px] w-[316px] h-[170px]' src="/8thcompappleimg.png" alt="App Store"/>
    </div>
  </div>


  <div class="flex-1">
    <img src="/8thcompphoneimg.png" alt="App Preview" class="w-[320px] mt-5" />
  </div>
</div>
</section>



      <Review/>
      <Footer/>
    </div>
  )
}

export default OurListener
