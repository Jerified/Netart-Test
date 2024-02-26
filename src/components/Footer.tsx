import { CiFacebook } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function Footer() {

    return (
        <>
            <footer className='bg-red-600'>
                <div className='flex flex-col lg:flex-row h-[13rem] items-center justify-between px-4 py-6 lg:px-8 text-white max-w-7xl mx-auto '>
                    <div className='flex items-center gap-1'>
                        <FaPhoneAlt className='border-2 rounded-full text-3xl p-1' />
                        <p>Tol free 1800 200 1234</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiFacebook className='text-3xl' />
                        <a href='www.facebook.com/cripump'>www.facebook.com/cripump</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <AiOutlineGlobal className='text-3xl' />
                        <a href='www.crigroups.com'>www.crigroups.com</a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
