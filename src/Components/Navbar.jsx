
import { useState } from 'react'
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai'
import GetStarted from './GetStarted'
import Logo from './Logo'
export default function Navbar() {
    let btn = ''
    let [icon, setIcon] = useState(false)
    let handleChange = () => {
        setIcon(!icon);
    }
    if (!icon) {
        btn = <AiOutlineAlignRight onClick={handleChange} className='text-white cursor-pointer lg:hidden' size={30}
         />;
         document.body.classList.remove('overflow-hidden');
    } else {
        btn = <AiOutlineClose onClick={handleChange} className='text-white cursor-pointer lg:hidden' size={30} />;
        document.body.classList.add('overflow-hidden')
    }
    return (
        <div className="xl:w-[90%] mx-auto p-4 flex justify-between items-center font-ubuntu" >
            <Logo/>
            <ul className={!icon ? 'ro-minus' : 'ro'} >
                <li className='text-xl p-2 '>
                    <a to='/Home' >home</a>
                </li>
                <li className='text-xl p-2 '>
                    <a to='/Home' >services</a>
                </li>
                <li className='text-xl p-2 '>
                    <a to='/Home' >about</a>
                </li>
                <li className='text-xl p-2 '>
                    <a to='/Home' >pricing</a>
                </li>
                <GetStarted valueName ='Get started' />
            </ul>

            {btn
            }
        </div>
    )
}
