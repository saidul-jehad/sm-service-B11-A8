import toast from "react-hot-toast";


const getBookData = () => {
    const storedBookListSTR = localStorage.getItem('bookList')

    if (storedBookListSTR) {
        const storedBookData = JSON.parse(storedBookListSTR)
        return storedBookData
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getBookData()
    console.log(storedBookData, id);

    if (storedBookData.includes(id)) {

        toast.error("You Have Already Booked!")
    }
    else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem('bookList', data)
        toast.success("Booking Success!")
        console.log('else');


    }
}

const deleteBooking = (id) => {
    const storedBookData = getBookData()
    const updateBookData = storedBookData.filter((item) => item.id !== id)
    localStorage.setItem('bookList', JSON.stringify(updateBookData))
    toast.error('Appointment Cancel')
}



export { getBookData, addToStoredDB, deleteBooking };