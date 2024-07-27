import Image from "next/image";
import money from '../../public/images/image-currency.jpg'
import restaurant from '../../public/images/image-restaurant.jpg'
import plane from '../../public/images/image-plane.jpg'
import confetti from '../../public/images/image-confetti.jpg'

const Articles = () => {
    return (
        <section className="bg-white md:p-20 py-10 px-6">
            <h2 className='text-2xl text-darkBlue py-4'>Latest Articles</h2>
            <div className='flex md:flex-wrap flex-col md:flex-row md:gap-4 gap-6 py-6'>
                <div className='flex-1 md:min-w-[250px] md:max-w-[300px] flex flex-col items-center md:items-start'>
                    <Image src={money} alt="money" className="h-48 rounded-xl" />
                    <div className="p-6">
                        <p className="text-xs text-grayishBlue font-semibold">By Claire Robinson</p>
                        <h3 className='text-base text-darkBlue cursor-pointer hover:text-limeGreen py-2'>Receive money in any currency with no fees</h3>
                        <p className='text-sm text-grayishBlue'>The world is getting smaller and we’re becoming more mobile. 
                            So why should you be forced to only receive money in a single … 
                        </p>
                    </div>
                </div>
                <div className='flex-1 md:min-w-[250px] md:max-w-[300px] flex flex-col items-center md:items-start'>
                    <Image src={restaurant} alt="restaurant" className="h-48 rounded-xl"/>
                    <div className="p-6">
                        <p className="text-xs text-grayishBlue font-semibold">By Wilson Hutton</p>
                        <h3 className='text-base text-darkBlue cursor-pointer hover:text-limeGreen py-2'>Treat yourself without worrying about money</h3>
                        <p className='text-sm text-grayishBlue'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. 
                            That means you …
                        </p>
                    </div>
                </div>
                <div className='flex-1 md:min-w-[250px] md:max-w-[300px] flex flex-col items-center md:items-start'>
                    <Image src={plane} alt="plane" className="h-48 rounded-xl" />
                    <div className="p-6">
                        <p className="text-xs text-grayishBlue font-semibold">By Wilson Hutton</p>
                        <h3 className='text-base text-darkBlue cursor-pointer hover:text-limeGreen py-2'>Take your Easybank card wherever you go</h3>
                        <p className='text-sm text-grayishBlue'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. 
                            We’ll even show you …
                        </p>
                    </div>
                </div>
                <div className='flex-1 md:min-w-[250px] md:max-w-[300px] flex flex-col items-center md:items-start'>
                    <Image src={confetti} alt="confetti" className="h-48 rounded-xl" />
                    <div className="p-6">
                        <p className="text-xs text-grayishBlue font-semibold">By Claire Robinson</p>
                        <h3 className='text-base text-darkBlue cursor-pointer hover:text-limeGreen py-2'>Our invite-only Beta accounts are now live! </h3>
                        <p className='text-sm text-grayishBlue' >After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles