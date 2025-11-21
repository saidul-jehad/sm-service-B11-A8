import React from 'react';



const Banner = () => {
    return (
        <div className='flex flex-col p-12 bg-base-200 '>

            <div className='text-center p-4 md:p-12'>
                <h2 className='text-4xl font-bold mb-2.5'>Dependable Care, Backed by Trusted Professionals.</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className='mt-8 flex flex-col md:flex-row items-center md:justify-center gap-3 '>
                    <input className='bg-white input-ghost input outline hover:border-0 rounded-4xl' type="text" placeholder='Search any doctor' name="" id="" />
                    <button className=' btn  bg-blue-600 hover:bg-blue-800 rounded-4xl text-white '>Search Now</button>
                </div>

            </div>

            <div className='flex md:flex-row flex-col gap-5'>
                <img src="https://i.ibb.co.com/C5HghbNs/banner-img-1.png" alt="" />
                <img className='hidden md:inline' src="https://i.ibb.co.com/C5HghbNs/banner-img-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;