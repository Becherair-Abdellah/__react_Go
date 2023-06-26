import ReactTyped from "react-typed"
import GetStarted from "./GetStarted"
export default function Intro() {
  return (
    <div className="text-center text-white mt-[5rem] pb-20" >
       <h1 className="text-[3rem] md:text-[5rem]" >Frontend engineer </h1>
       <p className="text-xl" >plan build test deploy for any <div>
       <ReactTyped className="text-[#16ff9e] font-bold" strings={['web','Mobile','Desktop','Metaverse']} loop typeSpeed={40} backSpeed={20}/>
       </div>
       </p>
       <p className="text-gray-300 text-[17px] mt-5 md:text-[20px]" >
       Unleash your ideas and request the service from our professionals.
       </p>
       <GetStarted data='mt-5' valueName = 'Get Started'/>
    </div>
  )
}
