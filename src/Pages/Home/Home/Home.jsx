import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors/Doctors';
import Success from '../Success Section/Success';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Success></Success>
        </div>
    );
};

export default Home;