import React from 'react';
import { deleteBooking } from '../../../../Component/Utilities/utilitities';

const BookingCard = ({ doctor, handleCancelBooking }) => {



    return (
        <div className='bg-white p-6 rounded-2xl '>
            <div className='flex justify-between items-center border-b pb-4 border-dashed'>
                <p>
                    <h2 className='font-bold text-xl'>{doctor.name}</h2>
                    <p>{doctor.education}</p>
                </p>

                <p>Appointment Fee: <span>{doctor.fee} Taka + Vat</span></p>
            </div>

            <button onClick={() => handleCancelBooking(doctor.id)} className='btn btn-circle btn-secondary w-full btn-outline mt-5 '>Cancel Appointment</button>
        </div>
    );
};

export default BookingCard;