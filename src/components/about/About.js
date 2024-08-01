import { Poppins, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '400', '300'] })
const space_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600', '400', '500'] })

const Card = ({ service }) => (
    <div className="hover:bg-button text-white  bg-gray-600 transition-all duration-300 hover:text-black w-[300px] rounded-3xl px-3 py-4 gap-2 flex flex-col">
        <img
            className="w-[200px] h-[200px] "
            src={service.image}
            alt={service.title}

        />
        <h1 className={`${poppins.className} text-xl  font-semibold`}>{service.title}</h1>
        <p className={`${poppins.className} text-xs`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga praesentium temporibus alias quidem eum unde ipsum. Necessitatibus magni consequuntur sed.</p>
        <div className="flex">
            <div className="flex items-center gap-1 border-transparent border-b-2 hover:border-blue-400 transition-border duration-300">
                <span className="cursor-pointer">LEARN MORE</span>
                <MdArrowOutward />
            </div>
        </div>



    </div>
)

const About = () => {
    const cardDetails = [{ "image": "/dumbell.png", "title": "MUSCLES BUILDINGS" }, { "image": "/cardio.png", "title": "MUSCLES BUILDINGS" }, { "image": "/boxing.png", "title": "MUSCLES BUILDINGS" }];

    return (
        <div className="mx-10 lg:mx-32 flex flex-col xs:gap-20">
            <div>
                <h1 className={`${space_grotesk.className} text-6xl`}>WHY CHOOSE US</h1>
                <div className="mt-10 flex flex-wrap gap-6 w-full justify-center">
                    {cardDetails.map((service, index) => (
                        <Card key={index} service={service} />
                    ))}

                </div>
            </div>
            <div className="my-10 flex flex-col gap-10 relative h-screen">
                <h1 className={`${space_grotesk.className} text-6xl`}>ABOUT OUR GYM</h1>
                <img className="w-full bg-cover h-[300px] xs:h-[400px] md:h-[600px] rounded-lg" src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flex" />
                <div className="flex w-full  gap-20">
                    <p className={`text-purple-100 font-thin text-sm w-full xs:w-1/2 ${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos eaque animi facilis cumque labore quo incidunt tempore tenetur architecto.</p>
                    <div className="bottom-[150px] left-5 absolute xs:relative xs:top-0 xs:left-0 font-semibold cursor-pointer bg-button hover:scale-105 text-black py-2 px-6 rounded-full h-10">
                        10 YEARS
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:mt-20 pb-16 gap-4 justify-center items-center">
                <div className="">
                    <img className="border-4 border-button  border-r-0 h-[120px] xs:h-[200px] xs:w-[200px] object-cover rounded-full w-[120px]" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="muscle" />
                </div>
                <div className="">
                    <img className="border-4 border-button border-b-0 h-[120px] xs:h-[200px] xs:w-[200px] object-cover rounded-full w-[120px]" src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cardio" />
                </div>
                <div className="flex flex-col">
                    <h1 className={`${space_grotesk.className} text-lg font-medium`}>Lorem ipsum dolor sit amet.</h1>
                    <p className={`${poppins.className} text-sm text-purple-200`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit, deleniti nostrum temporibus accusamus voluptatum laborum dolorum ipsum reprehenderit recusandae!</p>

                </div>
                <div className="flex flex-col">
                    <h1 className={`${space_grotesk.className} text-lg font-medium`}>Lorem ipsum dolor sit amet.</h1>
                    <p className={`${poppins.className} text-sm text-purple-200`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit, deleniti nostrum temporibus accusamus voluptatum laborum dolorum ipsum reprehenderit recusandae!</p>

                </div>
            </div>
        </div>
    )
}

export default About