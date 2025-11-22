import axios from "axios";
import { useEffect, useState } from "react";


const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        axios.get('/doctors.json')
            .then((res) => setDoctors(res.data));
    })
    return doctors;
};


export default useDoctors;