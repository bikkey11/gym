import About from "@/components/about/About";
import BestCoaches from "@/components/bestcoaches/BestCoaches";
import HomePage from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] })

export default function Home() {
  const lines = ["Transform with the Best" ," *", " Where Champions Train"," *" ,"Unlock Your Potential with Bikash's Expert Training"]

  return (

    <div className="  ">
      <div className="bg-home  bg-cover h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b  from-black via-slate-800 to-slate-800 opacity-90" />
        <div className="relative z-20 h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow ">
            <HomePage />
          </div>
          <div className="bg-button p overflow-hidden">
            <div className="  x-8 py-3 font-semibold  whitespace-nowrap animate-[marquee_10s_linear_infinite] gap-8 flex flex-row">
              {lines.map((text,index)=>(
              <p key={index} className={`${poppins.className}  `}>{text}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="bg-black text-white py-10">
        <About/>
      </div>
      <div className="bg-best">
        <BestCoaches/>
      </div>
    </div>


  );
}
