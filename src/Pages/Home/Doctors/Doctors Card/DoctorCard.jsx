import React from 'react';

const DoctorCard = ({ doctor }) => {
    // console.log(doctor);
    const { fee, id, image, name, registrationNumber, speciality, workingAt, experience, education } = doctor



    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl min-w-[300px] max-w-[400px] h-[200px]" />
                </figure>
                <div className="card-body p-10 mx-2 ">
                    <div className="card-actions ">
                        <div className="badge badge-outline text-green-500 ">Available</div>
                        <div className="badge badge-outline text-blue-500">{experience} Experience</div>
                    </div>
                    <h2 className="text-2xl font-extrabold">{name}</h2>
                    <p className='font-medium'>{education}</p>

                    <p className='border-t border-dashed pt-3'><span className='font-medium'>Reg No:</span> {registrationNumber}</p>
                    <p><span className='font-medium'>Speciality:</span> {speciality}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary w-full">View Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorCard;