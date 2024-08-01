"use client"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"

const poppins = Poppins({ subsets: ['latin'], weight: ["600"] })

const coaches = [
  {
    "name": "Coach1",
    "img": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwY29hY2h8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Coach2",
    "img": "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwY29hY2h8ZW58MHx8MHx8fDI%3D"
  },
  {
    "name": "Coach3",
    "img": "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Coach4",
    "img": "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]


const BestCoaches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState('')
  const getPreviousIndex = () => (currentIndex == 0 ? coaches.length - 1 : currentIndex - 1)
  const getNextIndex = () => (currentIndex == coaches.length - 1 ? 0 : currentIndex + 1)

console.log(animateDirection)

useEffect(() => {
  if (animateDirection) {
    const timer = setTimeout(() => setAnimateDirection(''), 1000);
    return () => clearTimeout(timer);
  }
}, [animateDirection]);

  return (
    <div className="py-6 mx-10 lg:mx-32">
      <h1 className={`${poppins.className} text-white text text-[43px] leading-10 sm:text-6xl`}>
        OUR BEST COACHES
      </h1>
      <div className="flex overflow-hidden mt-8 w-full justify-center gap-2 items-center">
        <img className={`w-[200px] h-[300px] opacity-20  ${animateDirection === 'left' ? 'animate-[slideLeft_1s_ease]' : ''} ${animateDirection === 'right' ? 'animate-[slideRight_1s_ease]' : ''}`} src={coaches[getPreviousIndex()].img} alt="" />
        <img className={`w-[250px] h-[350px] ${animateDirection === 'left' ? 'animate-[slideLeft_1s_ease]' : ''} ${animateDirection === 'right' ? 'animate-[slideRight_1s_ease]' : ''}  `} src={coaches[currentIndex].img} alt="" />
        <img className={`w-[200px] h-[300px] opacity-20  ${animateDirection === 'left' ? 'animate-[slideLeft_1s_ease]' : ''} ${animateDirection === 'right' ? 'animate-[slideRight_1s_ease]' : ''}`} src={coaches[getNextIndex()].img} alt="" />
      </div>
      <div className={`flex w-full justify-center mt-4`}>
        {coaches.map((coaches, index) => (
          <input key={index} type="radio" checked={currentIndex === index} name="" id=""
            onChange={(e) => {
              if (index > currentIndex) {
                setAnimateDirection('left');
              } else {
                setAnimateDirection('right');
              }
              setCurrentIndex(index)
            }}
          />

        ))}
      </div>

    </div>
  )
}

export default BestCoaches

