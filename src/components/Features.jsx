"use client"
import Image from 'next/image'
import bankingIcon from '../../public/images/icon-online.svg'
import budgetingIcon from '../../public/images/icon-budgeting.svg'
import onboardingIcon from '../../public/images/icon-onboarding.svg'
import openapiIcon from '../../public/images/icon-api.svg'

const Features = () => {
    return (
        <section className='p-20 bg-lightGrayishBlue'>
            <h2 className='text-2xl text-darkBlue'>Why choose Easybank?</h2>
            <p className='text-grayishBlue text-sm py-2'> We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
            <div className='flex flex-wrap gap-4 py-6'>
                <div className='flex-1 min-w-[250px] max-w-[300px]'>
                    <Image src={bankingIcon} alt='banking icon' width={50} height={50} />
                    <h3 className='text-xl text-darkBlue'>Online Banking</h3>
                    <p className='text-sm text-grayishBlue'>Our modern web and mobile applications allow you to keep 
                        track of your finances wherever you are in the world. 
                    </p>
                </div>
                <div className='flex-1 min-w-[250px] max-w-[300px]'>
                    <Image src={budgetingIcon} alt='budget icon' width={50} height={50}/>
                    <h3 className='text-xl text-darkBlue'>Simple Budgeting</h3>
                    <p className='text-sm text-grayishBlue'>See exactly where your money goes each month. 
                        Receive notifications when you’re close to hitting your limits.
                    </p>
                </div>
                <div className='flex-1 min-w-[250px] max-w-[300px]'>
                    <Image src={onboardingIcon} alt='onboarding icon' width={50} height={50}/>
                    <h3 className='text-xl text-darkBlue'>Fast Onboarding</h3>
                    <p className='text-sm text-grayishBlue'>We don’t do branches. 
                        Open your account in minutes online and start taking control of your finances right away.
                    </p>
                </div>
                <div className='flex-1 min-w-[250px] max-w-[300px]'>
                    <Image src={openapiIcon} alt='openapi icon' width={50} height={50}/>
                    <h3 className='text-xl text-darkBlue'>Open API</h3>
                    <p className='text-sm text-grayishBlue'>Manage your savings, investments, pension, and much more from one account. 
                        Tracking your money has never been easier.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features;

