import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/AlexTellezProfile.png"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-6 text-6xl font-thin tracking-tight lg:mt:16
                        lg:text-7xl shadow-2xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white ">
                            Alex Tellez
                        </h1>

                        <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                            bg-clip-text text-4xl tracking-tight text-transparent
                            shadow-xl transform transition duration-500 ease-in-out
                            hover:scale-110 hover:shadow-2xl hover:text-white ">
                            Junior Web Developer
                        </span>

                        <p className="max-w-xl py-6 font-normal tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic}
                            alt="Alex Tellez"
                            className="rounded-2xl object-cover max-w-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
