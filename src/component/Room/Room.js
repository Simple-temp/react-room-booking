import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Room.css';
const Room = (props) => {
    const {title,bedTypeId,capacity,description,price,img} = props.room;

    return (
        <>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="img-box">
                        <img src={img} alt="" />
                        </div>
                        <p>Bed :{bedTypeId}</p>
                        <p>Title :{title}</p>
                        <p>Description :{description}</p>
                        <p>Capacity :{capacity}</p>
                        <div className="footer d-flex justify-content-between">
                        <p>Price :{price}</p>
                        <button className='btn btn-primary'> <Link to={`/booking/${bedTypeId}`}>Room Book</Link> </button>
                        </div>
                    </div>
                </div>
        </>        
    );
};

export default Room;