import React from 'react'

export default function GetStarted(data) {
    
    const style = `text-xl bg-[#16ffaa] font-bold p-2 rounded-lg shadow-sm shadow-[#16ffaa] cursor-pointer  w-[180px] text-gray-800 ${data.data} `
  return (
    
    <button className={style} >{data.valueName}</button>
  )
}
