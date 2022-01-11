import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Room from '../Room/Room';
import './Home.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Home = () => {
    const [loggedInuser , setloggedInuser] = useContext( UserContext )
    const rooms = [
        {
            bedTypeId : 1 ,
            title : "Signle bed only ",
            capacity : 1 ,
            description : " jhogra hole oke akai thakte hobe bondhu . bow er sathe johra korte hoy na pilij",
            price : 199,
            place:"Uganda",
            img : "https://imagizer.imageshack.com/img922/5099/Ql6fVp.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double bed for both",
            capacity : 6 ,
            description : "congratulation brother jhogra korba r bow dare marba na kmn taile r thakbe na ",
            price : 399,
            place:"Uganda",
            img : "https://imagizer.imageshack.com/img923/5205/tYx06G.jpg",
        },
        {
            bedTypeId : 3 ,
            title : "One signle bed 2 double bed",
            capacity : 5 ,
            description : "Jodi ridoy bashai mehoman ashe tahole tho thakar bebostha korte hobe tai na ",
            price : 499,
            place:"Uganda",
            img : "https://imagizer.imageshack.com/img923/7444/Oa6OPD.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double bed ",
            capacity : 2 ,
            description : "rag kore dui jon dui bed a thaklee ... baper na agula hoy husband wife er majhe ",
            price : 299,
            img : "https://imagizer.imageshack.com/img924/7449/2c4QQs.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double bed double person",
            capacity : 4 ,
            description : " Ridoy er boyosh jokhon prai jani na koto hobee ",
            price : 599,
            place:"Uganda",
            img : "https://imagizer.imageshack.com/img923/3627/5OY54Y.jpg",
        },
        {
            bedTypeId : 3 ,
            title : "Double bed no one person",
            capacity : 6 ,
            description : " dui betai mara mari kore bari theke cole geche but vara diye jaini ",
            price : 899,
            place:"Uganda",
            img : "https://imagizer.imageshack.com/img922/4954/47UDNg.jpg",
        },
    ]
    return (
        <>
        <header>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="">R<FavoriteIcon></FavoriteIcon>S</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <Link class="nav-link" to="/home">Home</Link>
                                </li>
                                {/* <li class="nav-item">
                                <Link class="nav-link" to="/booking">Booking</Link>
                                </li> */}
                                <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                                </li>
                                <small><img src={loggedInuser.img} alt="" /></small>
                                <i onClick={()=>setloggedInuser({})} className='i'><ExitToAppIcon></ExitToAppIcon></i>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto height">
                        <h1>Welcome Our Ridoy<FavoriteIcon></FavoriteIcon>Sumi wedding party,,</h1>
                        <p>Mr Ridoy here your favourite room services are here !!</p>
                    </div>
                </div>
        </header>
        <section>
            <div className="container">
                <div className="row">
                        {
                        rooms.map(room => <Room room={room} key={room.title}></Room> )
                        }
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;