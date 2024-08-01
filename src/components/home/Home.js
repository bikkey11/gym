import { Space_Grotesk } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import { Poppins } from "next/font/google";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const space_grotesk = Space_Grotesk({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })
const poppins_200 = Poppins({ subsets: ['latin'], weight: ['200'] })


const HomePage = () => {
    return (
        <div className="relative text-white flex flex-col justify-center h-full  items-center gap-4">
            <h1 className={`font-semibold text-4xl xs:text-5xl sm:text-6xl md:text-7xl ${space_grotesk.className}`}>WORK WITH</h1>
            <h2 className={`font-semibold text-4xl xs:text-5xl sm:text-6xl md:text-7xl ${space_grotesk.className}`}>PROFESSIONALS</h2>
            <div className={`flex flex-col text-center text-sm  ${poppins_200.className}`}>
                <p>Achieve Your Fitness Goals with BikkeyGym </p>
                <p>Your Journey Starts Here</p>
            </div>
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${poppins.className}`}>
                <div className="cursor-pointer bg-button hover:scale-105 text-black py-2 px-6 rounded-full shadow-button ">
                    START NOW
                </div>
                <div className="flex items-center gap-1 border-transparent border-b-2 hover:border-blue-400 transition-border duration-300">
                    <span className="cursor-pointer">LEARN MORE</span>
                    <MdArrowOutward />
                </div>
            </div>
            <div className="flex gap-4 sm:relative sm:mt-14  absolute bottom-10 ">
                <IoIosArrowBack className="cursor-pointer    hover:bg-slate-700 border rounded-full p-2 text-3xl" />
                <IoIosArrowForward className="cursor-pointer hover:bg-slate-700  border rounded-full p-2 text-3xl" />
            </div>
        </div>
    )
}

export default HomePage