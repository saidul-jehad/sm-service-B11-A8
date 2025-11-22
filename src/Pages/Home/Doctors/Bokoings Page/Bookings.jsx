import React, { useEffect, useState } from 'react';
import { deleteBooking, getBookData } from '../../../../Component/Utilities/utilitities';
import BookingCard from './BookingCard';
import axios from 'axios';
import { useLoaderData } from 'react-router';

const Bookings = () => {
    const [bookedDoctors, setBookedDoctors] = useState([])
    const doctors = useLoaderData()

    useEffect(() => {
        const bookingsId = getBookData()
        const bookingsList = doctors.filter((doctor) => bookingsId.includes(doctor.id))
        setBookedDoctors(bookingsList)
    }, [])
    console.log(bookedDoctors);

    const handleCancelBooking = (id) => {
        deleteBooking(id)
        setBookedDoctors(prev => prev.filter(doc => doc.id !== id))

    }


    return (
        <div className='min-h-screen '>

            <div className='mt-12'>
                <h2 className='text-center font-extrabold text-3xl'>My Today Appointments</h2>
                <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                <div className='flex flex-col gap-5 mt-10'>
                    {
                        bookedDoctors.map((doctor) => <BookingCard
                            key={doctor.id}
                            doctor={doctor}
                            handleCancelBooking={handleCancelBooking}
                        ></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookings;