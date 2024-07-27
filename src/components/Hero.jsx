"use-client"

import Image from "next/image"; 
import Heroimage from '../../public/images/image-mockups.png' 

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center w-screen justify-between md:pl-20 md:pb-6 pb-14 overflow-hidden bg-white">
        <aside className="bg-mobile-bg bg-no-repeat block w-screen md:hidden bg-cover md:w-3/5 bg-center pb-5">
            <Image src={Heroimage} alt="image" className="w-4/6 mx-auto mt-[-70px]"/>
        </aside>
        <main className="md:w-2/5 flex flex-col md:items-start md:p-0 px-6 items-center gap-6 items-start">
            <h2 className="text-4xl text-darkBlue md:text-left text-center"> Next generation digital banking</h2>
            <p className="text-grayishBlue text-sm md:text-left text-center"> Take your financial life online. 
                Your Easybank account will be a one-stop-shop for spending, 
                saving, budgeting, investing, and much more.
            </p>
            <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white text-sm px-6 py-2 rounded-2xl hover:opacity-50">Request Invite</button>
        </main>
        <aside className="bg-custom-bg bg-contain hidden md:block w-3/5 mt-[-100px] bg-center">
            <Image src={Heroimage} alt="image" className="w-4/6 mx-auto"/>
        </aside>

    </div>
  );
};

export default Hero;
