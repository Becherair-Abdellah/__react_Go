import Laptop from '../assets/laptop.jpg'
// import btn get started
import GetStarted from './GetStarted'
export default function Anlyc() {
  return (
  <>
   <div className=' bg-white' >
   <div className="text-center md:text-start xl:w-[90%] md:flex md:justify-center py-20 md:items-center" >
        <div className="img">
        <img className='w-[700px]' src={Laptop} alt="" />
        </div>
        <div className='px-2' >
            <p className='font-bold text-[#16ff9e] uppercase text-lg mb-5' >data analytics dashboard</p>
            <h1 className='text-2xl uppercase font-bold'>manage data analytics centerally</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam est, maiores quasi cum distinctio</p>
            <GetStarted data = ' bg-gray-800 shadow-none mt-5 cursor-pointer no-sh' valueName='Get started' />
        </div>
    </div>
   </div>
        
  </>
  )
}
