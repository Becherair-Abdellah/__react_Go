

export default function Newsletter() {
    return (
        <div className=" w-[90%] mx-auto py-10 lg:flex lg:items-center lg:justify-between">
            <div>
                <h1 className="text-white font-bold text-2xl">Want tips & tricks to optimize your flow?</h1>
                <p className="text-white text-start mt-1" >Sign up to our newsletter and stay up to date.</p>
            </div>

            <div>
                <div className="flex flex-col">
                    <form className="mt-5 flex justify-between items-start flex-col" action="">
                        <div className="w-full">
                        <input className="h-[40px] w-[70%] rounded-md pl-2 outline-none" type="email" required placeholder='Enter your email' />
                        <button className="bg-[#16ff9e] text-white font-bold h-[40px] rounded-md p-2 text-[16px] w-[28%] ml-[2%]" placeholder='Enter your email' >Notify me</button>
                        </div>
                        <p className="text-white mt-5" >We care bout the production of your data. Read out</p>
                    </form>
                    <a href="" className="text-[#16ff9e] underline">Privacy Ploicy</a>
                </div>
            </div>
        </div>
    )
}
