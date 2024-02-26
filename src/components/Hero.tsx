
function Hero() {

    return (
        <>
            <section className=' mt-10 w-full px-4 md:px-8  '>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <img className='w-[18rem] lg:w-[35%] mx-auto' src='/asserts/1.png' alt='award' />
                    <div className='lg:w-[65%]'>
                        <h3 className='font-bold text-lg'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                        <ol className='list-disc p-4'>
                            <li>C.R.I. energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ol>
                        <img className='py-2' src='/asserts/2.png' alt='ceremony' />
                        <p>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
                <p className='py-10 text-center'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <img className='py-2' src='/asserts/3.png' alt='equipments' />
                <p className='pt-2 text-center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                <div className='ring-[1px] ring-red-600 my-4' />
                <div className='text-center pb-5'>
                    <p className='font-bold py-4 '>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                    <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>

                </div>
            </section>
        </>
    )
}

export default Hero
