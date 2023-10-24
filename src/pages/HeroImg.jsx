import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';




const HeroImg = ({ openLoginModal,openRegisterModal, loggedin, setLoggedin ,logout}) => {
    return (
        <>
            <div className='relative'>
                <img
                    src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                    alt=""
                    className='w-screen h-[80vh]  object-cover'
                />
            </div>


            <div className="absolute top-3  justify-end right-5 flex text-white items-center space-x-4 p-4 gap-x-6">
                {loggedin ? "" : <button className='text-xl z-40 ' onClick={openRegisterModal}>Sign up</button>}
                {loggedin ? "" : <button className='text-xl z-40 ' onClick={openLoginModal}>Log in</button>}

                <div className='flex items-center z-40'>
                    {loggedin ? (<button className=''>
                        <AiOutlineUser style={{ fontSize: '2.2rem' }} className='mr-7' />
                    </button>) : ""}
                    {loggedin ? (<button><AiOutlineLogout style={{ fontSize: '2.2rem' }} onClick={logout} /></button>) : ("")}




                </div>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white  h-[80vh] ">
                <img
                    src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                    alt=""

                    className=' w-[300px] w-[150px]'
                />
                <h1 className='mt-12 md:text-4xl text-center text-2xl '>Find the best restaurants, cafés <br /> and bars in India</h1>
            </div>
        
        </>
    )
}

export default HeroImg