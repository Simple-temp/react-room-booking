import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Room.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Room = (props) => {

    const classes = useStyles();
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
                        <p>Price :${price}</p>
                        {/* <button className='btn btn-primary'> <Link to={`/booking/${bedTypeId}`} className='room-btn'>Room Book</Link> </button> */}
                        <Button variant="contained" color="primary"><Link to={`/booking/${bedTypeId}`} className='room-btn'>Room Book</Link></Button>
                        </div>
                    </div>
                </div>
        </>        
    );
};

export default Room;