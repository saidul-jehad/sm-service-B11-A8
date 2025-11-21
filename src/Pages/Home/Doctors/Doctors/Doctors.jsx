import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DoctorCard from '../Doctors Card/DoctorCard';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        axios.get('/doctors.json')
            .then((res) => setDoctors(res.data))
    })



    return (
        <div className='mt-16'>
            <h2 className='text-4xl font-bold text-center '>Our Best Doctors</h2>
            <p className='w-[90%] text-center md:w-[80%] mt-3.5 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            {/* Doctors Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                {
                    doctors.map((doctor) => <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                    ></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;