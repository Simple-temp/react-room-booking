import React from 'react';
import Room from '../Room/Room';
import './Home.css';
const Home = () => {
    const rooms = [
        {
            bedTypeId : 1 ,
            title : "Signle bed only",
            capacity : 1 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 199,
            img : "https://imagizer.imageshack.com/img922/5099/Ql6fVp.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double bed only",
            capacity : 6 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 399,
            img : "https://imagizer.imageshack.com/img923/5205/tYx06G.jpg",
        },
        {
            bedTypeId : 3 ,
            title : "One signle bed 2 double bed",
            capacity : 5 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 499,
            img : "https://imagizer.imageshack.com/img923/7444/Oa6OPD.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double",
            capacity : 2 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 299,
            img : "https://imagizer.imageshack.com/img924/7449/2c4QQs.jpg",
        },
        {
            bedTypeId : 2 ,
            title : "Double bed double person",
            capacity : 4 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 599,
            img : "https://imagizer.imageshack.com/img923/3627/5OY54Y.jpg",
        },
        {
            bedTypeId : 3 ,
            title : "Double bed double person",
            capacity : 6 ,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime excepturi dolor necessitatibus totam explicabo laudantium ipsa praesentium, suscipit nam!",
            price : 899,
            img : "https://imagizer.imageshack.com/img922/4954/47UDNg.jpg",
        },
    ]
    return (
        <>
        <header>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="">Logo</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link" href="">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="">Login</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="">Booking</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto height">
                        <h1>Welcome Our Website,,</h1>
                        <p>Your favourite Services are here !!</p>
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