import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {

    const [bookings,setbookings] = useState([]);

    const [loggedInuser , setloggedInuser] = useContext( UserContext )

    useEffect(() => {

        fetch(`http://localhost:4200/bookingsData?email=`+loggedInuser.email,{
            method : "GET",
            headers: {
                'Content-Type': 'application/json',
                authoraization : `Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data => setbookings(data))

    },[])

    return (
        <div>
            <h3>You have booking : {bookings.length}</h3>
            {
                bookings.map(books => <li>Name : {books.name} from : {(new Date(books.startTime).toDateString("dd/MM/yyyy"))} to : {(new Date(books.endTime).toDateString("dd/MM/yyyy"))}</li>)
            }
        </div>
    );
};

export default Bookings;