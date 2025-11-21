import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='min-h-[500px] mt-16'>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold'>We Provide Best Medical Services</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 mt-8 mx-auto gap-7 justify-between w-[95%]'>
                <div className='bg-white flex flex-col items-center p-4 rounded-xl'>
                    <img src="https://i.ibb.co.com/QvnS3TPx/success-doctor.png" alt="" />

                    <CountUp

                        end={199}
                        duration={2}
                        enableScrollSpy
                        start={0}
                        delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-6xl font-extrabold my-2.5'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <p>Total Doctors</p>
                </div>

                <div className='bg-white flex flex-col items-center p-4 rounded-xl'>
                    <img src="https://i.ibb.co.com/f6wNFMK/success-review.png" alt="" />
                    <CountUp

                        end={467}
                        duration={2}
                        enableScrollSpy
                        start={0}
                        delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-6xl font-extrabold my-2.5'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <p>Total Reviews</p>
                </div>
                <div className='bg-white flex flex-col items-center p-4 rounded-xl'>
                    <img src="https://i.ibb.co.com/TqPBB1b9/success-patients.png" alt="" />

                    <CountUp

                        end={1900}
                        duration={2}
                        enableScrollSpy
                        start={0}
                        delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-6xl font-extrabold my-2.5'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <p>Patients</p>
                </div>
                <div className='bg-white flex flex-col items-center p-4 rounded-xl'>
                    <img src="https://i.ibb.co.com/84mT5BQW/success-staffs.png" alt="" />

                    <CountUp

                        end={300}
                        duration={2}
                        enableScrollSpy
                        start={0}
                        delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-6xl font-extrabold my-2.5'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <p>Total Stuffs</p>
                </div>

            </div>
        </div>
    );
};

export default Success;