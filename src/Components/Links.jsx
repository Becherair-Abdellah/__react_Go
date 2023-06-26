
export default function Links(data) {
  return (
   <div className="border text-start w-full mx-auto p-5 mt-10">
     <h2 className="text-gray-400 font-bold text-lg capitalize mb-5" >{data.title}</h2>
    <ul className="text-gray-200">
      <li>{data.arr[0]}</li>
      <li>{data.arr[1]}</li>
      <li>{data.arr[2]}</li>
      <li>{data.arr[3]}</li>
    </ul>
   </div>
  )
}
