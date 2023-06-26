
import GetStarted from './GetStarted';
export default function Plan(data) {
    const style = `bg-white rounded-lg shadow-lg text-center pb-10 mt-20 w-full ${data.style} `
  return (
    <div className={style} >
      <img className='w-[90px] mx-auto relative left-5 -top-10 ' src={data.srcImg} alt="" />
      <h2 className='text-gary-800 font-bold text-xl capitalize my-4 '>{data.namePlan}</h2>
      <h1 className='font-bold text-4xl'>{data.price}</h1>
      <ul className='flex flex-col my-5 w-br'>
     <li className='border-t-2'>
         <span className='p-1'>{data.storage}</span>
        </li>
        <li>

      <span className='p-1' >{data.user}</span>
        </li>
        <li>
      <span className='p-1'>{data.sending}</span>
        </li>
      </ul>
      <GetStarted valueName='start trial' />
    </div>
  )
}
