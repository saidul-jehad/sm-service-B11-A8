import React, { useEffect, useState } from 'react';
import useDoctors from '../../../../Component/Utilities/useDoctors';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB } from '../../../../Component/Utilities/utilitities';
// import { useLoaderData } from 'react-router  ';

const DoctorDetails = () => {
    const navigate = useNavigate()
    const doctors = useLoaderData()
    const data = useParams()
    const id = parseInt(data.id)

    const doctor = doctors.find((doctor) => doctor.id === id)
    // console.log(doctor);
    const { fee, image, name, registrationNumber, speciality, workingAt, experience, education, availability } = doctor

    const handleBookAppointment = (id) => {
        addToStoredDB(id)
        console.log(id);

    }







    return (
        <div className='min-h-screen'>
            <div className=' text-center mx-auto w-full mt-12 bg-white p-8 rounded-xl'>
                <h2 className='text-3xl font-extrabold mb-2'>Doctor's Profile Details </h2>
                <p className='max-w-[90%] mx-auto md:max-w-[80%]'>“A caring Pediatrician devoted to the health and development of children from infancy to adolescence. Known for a gentle approach, accurate diagnosis, and dedicated support for both children and parents.”</p>
            </div>

            <div className='flex p-6 flex-col md:flex-row bg-white gap-8 my-8 rounded-xl'>
                <div className='w-[30%] '>
                    <img className='rounded-lg max-h-[300px]' src={image} alt="" />
                </div>

                <div className='w-[70%]'>
                    <h2 className='text-2xl font-extrabold'>{name}</h2>
                    <p>{education}</p>
                    <p className='mt-4'>Working At-</p>
                    <span className='font-bold'>{workingAt}</span>

                    <p className='border-y border-dashed my-4 py-1'>{registrationNumber}</p>
                    <p className='font-semibold mb-2.5'>Availability: {availability.map((av, index) => <span className='badge text-yellow-600 badge-outline mx-2  rounded-full' key={index}>{av} </span>)}</p>

                    <p><span className='font-semibold'>Consultation Fee: </span> <span className='text-blue-600'>Taka: {fee} </span>(Incl.Vat)</p>
                </div>


            </div>

            <div className='bg-white p-8 rounded-xl '>

                <h2 className='text-center font-extrabold text-2xl'>Book An Appointment</h2>
                <div className='border-y border-dashed py-2 flex justify-between my-5'>
                    <p>Availability</p>
                    {
                        availability && <p className='badge badge-outline rounded-full text-green-500'> Doctor: Available Today</p>
                    }
                </div>

                <button
                    onClick={() => handleBookAppointment(id)}
                    className='btn btn-primary w-full'>Book Appointment Now</button>

            </div>


            <button onClick={() => navigate(-1)} className='btn btn-primary'> Go Back</button>

        </div>
    );
};

export default DoctorDetails;