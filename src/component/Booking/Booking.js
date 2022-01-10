import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import Bookings from '../Bookings/Bookings';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Booking = () => {

    const [loggedInuser , setloggedInuser] = useContext( UserContext )

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState({
      startTime : new Date(),
      endTime : new Date()
    });

    const handleStartTime = (date) => {
      const newDate = {...selectedDate}
      newDate.startTime = date;
      setSelectedDate(newDate);
    };

    const handleEndTime = (date) => {
      const newDate = {...selectedDate}
      newDate.endTime = date;
      setSelectedDate(newDate);
    };
  
    const handleBooking = () =>
    {
        const bookNow = {...loggedInuser,...selectedDate}
        fetch(`http://localhost:4200/roomBook`,{
          method : "POST",
          headers: {'Content-type': 'application/json'},
          body : JSON.stringify(bookNow)
        })
        .then( res => res.json())
        .then( result => {
          console.log(result)
        })
    }

    return (
        <div className='container'>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto booking">
                <p>Hello , {loggedInuser.name} ! </p>
                <h5>Now select your start time and end time</h5>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Start Time"
                        value={selectedDate.startTime}
                        onChange={handleStartTime}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="End Time"
                        format="MM/dd/yyyy"
                        value={selectedDate.endTime}
                        onChange={handleEndTime}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                    <Button variant="contained" color="primary" onClick={handleBooking} ><Link to="" className='gobtn'>Go to Booking</Link></Button>
                  </MuiPickersUtilsProvider>
                  <Bookings></Bookings>
            </div>
        </div>
    );
};

export default Booking;