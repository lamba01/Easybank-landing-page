"use-client"

import Image from "next/image"; 
import Heroimage from '../../public/images/image-mockups.png' 
import bg from '../../public/images/bg-intro-desktop.svg'

const Hero = () => {
  return (
    <div className="flex items-center w-screen justify-between pl-20 overflow-hidden bg-white">
        <main className="w-2/5 flex flex-col gap-6 items-start">
            <h2 className="text-4xl text-darkBlue"> Next generation digital banking</h2>
            <p className="text-grayishBlue text-sm"> Take your financial life online. 
                Your Easybank account will be a one-stop-shop for spending, 
                saving, budgeting, investing, and much more.
            </p>
            <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white text-sm px-6 py-2 rounded-2xl hover:opacity-50">Request Invite</button>
        </main>
        <aside className="bg-custom-bg bg-contain w-3/5 mt-[-100px] bg-center">
            <Image src={Heroimage} alt="image" className="w-4/6 mx-auto"/>
        </aside>
    </div>
  );
};

export default Hero;
