import { HERO_CONTENT } from "../constants"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center text-center ">
                        <h1 className="pb-6 text-6xl font-thin tracking-tight lg:mt:16
                        lg:text-7xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white ">
                            Alex Tellez
                        </h1>

                        <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                            bg-clip-text text-4xl tracking-tight text-transparent
                            shadow-xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white ">
                            Junior Software Developer
                        </span>

                        <p className="max-w-xl py-6 font-light tracking-tighter shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white text-center">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
