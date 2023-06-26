import React from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsFacebook,BsInstagram,BsTwitter,BsPinterest} from 'react-icons/bs'
import Links from './Links';
export default function Footer() {
  return (
    <div className='p-10 md:flex md:justify-between md:items-center'>
      <div className='' >
        <Logo/>
        <p className='text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores repellat tempore. Repellendus perspiciatis possimus inventore ratione suscipit! Necessitatibus, eius at recusandae autem accusantium illo minima sed est ab eveniet.</p>
        <div className='flex justify-start gap-5 mt-5 '>
            <BsFacebook className='text-white text-2xl cursor-pointer'/>
            <BsInstagram className='text-white text-2xl cursor-pointer' />
            <BsTwitter className='text-white text-2xl cursor-pointer' />
            <BsPinterest className='text-white text-2xl cursor-pointer' />
        </div>
      </div>
      <div className='flex justify-center items-center gap-5' >
        <Links title = 'solutions' arr={['analytics ','merketing','insights','Commerce']}/>
        <Links title = 'Supports' arr={['pricing ','docs','guides','API status']}/>
        <Links title = 'Company' arr={['about ','blog','jobs','Press','partners']}/>
      </div>
    </div>
  )
}
