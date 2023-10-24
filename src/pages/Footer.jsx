
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className=' flex flex-col md:mt-36 mt-8  items-center items-center  '>
                <div className='md:w-full md:px-[190px] flex justify-between'>
                    <div>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato logo" height={40} width={150} />
                    </div>
                    <div className='md:flex md:gap-x-10 hidden'>
                        <h1 className='border border-2 border-gray-500 px-12 py-2 rounded-xl'>India</h1>
                        <h1 className='border border-2 border-gray-500 px-12 py-2 rounded-xl'>English</h1>
                    </div>

                </div>
                <div className='flex md:flex-row flex-col md:justify-center items-center md:w-full xl:gap-x-36 md:gap-x-16 sm:gap-x-2 md:mt-20 mt-5 text-center md:text-start md:px-14'>
                    <div className='flex flex-col'>
                        <h1 className='font-light text-sm md:mt-0 mt-3'>ABOUT ZOMATO</h1>

                        <p className='text-sm text-gray-500 mt-3'>Who we are</p>
                        <p className='text-sm text-gray-500 mt-2'>Blog</p>
                        <p className='text-sm text-gray-500 mt-2'>Work with Us</p>
                        <p className='text-sm text-gray-500 mt-2'>Investors Relations</p>
                        <p className='text-sm text-gray-500 mt-2'>Report Fraud</p>
                        <p className='text-sm text-gray-500 mt-2'>Press Kit</p>
                        <p className='text-sm text-gray-500 mt-2'>Contact Us</p>
                    </div>
                    <div>
                        <h1 className='font-light text-sm md:mt-0 mt-3'>ZOMAVERSE</h1>
                        <p className='text-sm text-gray-500 mt-3'>Zomato</p>
                        <p className='text-sm text-gray-500 mt-2'>Blinkit</p>
                        <p className='text-sm text-gray-500 mt-2'>Feeding India</p>
                        <p className='text-sm text-gray-500 mt-2'>Hyperpure</p>
                        <p className='text-sm text-gray-500 mt-2'>Zomaland</p>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-light text-sm md:mt-0 mt-3'>FOR RESTAURANTS</h1>
                            <p className='text-sm text-gray-500 mt-3'>Partner With Us</p>
                            <p className='text-sm text-gray-500 mt-2'>Apps For You</p>
                        </div>
                        <div>
                            <h1 className='font-light text-sm md:mt-8  mt-3'>FOR ENTERPRISES</h1>
                            <p className='text-sm text-gray-500 mt-3'>Zomato For Enterprises</p>
                        </div>
                    </div>


                    <div className=' '>
                        <h1 className='font-light text-sm md:mt-0 mt-3'>LEARN MORE</h1>
                        <p className='text-sm text-gray-500 mt-3'>Privacy</p>
                        <p className='text-sm text-gray-500 mt-2'>Security</p>
                        <p className='text-sm text-gray-500 mt-2'>Terms</p>
                        <p className='text-sm text-gray-500 mt-2'>Sitemap</p>
                    </div>
                    <div>
                        <h1 className='font-light text-sm md:mt-0 mt-2'>SOCIAL LINKS</h1>
                        <div className='flex gap-x-4 mt-6'>
                            <button><AiFillLinkedin /></button>
                            <button><AiFillInstagram /></button>
                            <button><AiFillTwitterCircle /></button>
                            <button><AiFillYoutube /></button>
                            <button><AiFillFacebook /></button>




                        </div>
                        <div className='flex flex-col gap-y-3 mt-6'>
                            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" width={150} height={50} />
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" width={150} height={50} />
                        </div>
                    </div>
                </div>
                <div className='px-[190px] mt-16'>
                    <hr ></hr>
                </div>

                <p className='flex mt-8  text-sm text-gray-500 md:px-0 px-6'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>

            </div>

        </>
    )
}

export default Footer