import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Booking = () => {

    const classes = useStyles();

    return (
        <div className='container'>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto text-center booking">
                <h1>Booking..Succesfull..Baper na vai Bokking hoye geche akhon khali jaba r thakba</h1>
                <Button variant="contained" color="primary"><Link to="/home" className='gobtn'>Go to home</Link></Button>
            </div>
        </div>
    );
};

export default Booking;