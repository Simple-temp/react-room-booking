import React, { useContext } from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import { initializeApp } from "firebase/app";
import  firebaseConfig   from "./firebaseConfig";
import { GoogleAuthProvider , getAuth , signInWithPopup  } from "firebase/auth";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

initializeApp( firebaseConfig );

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const Login = () => {
    
    const provider = new GoogleAuthProvider();

    const [loggedInuser , setloggedInuser] = useContext ( UserContext );
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const haldleGoogleSignIn = () =>
    {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName , email , photoURL} = result.user;
                const signedInuser = {name:displayName , email:email , img:photoURL };
                setloggedInuser(signedInuser);
                authToken();
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const authToken = () =>
    {
        const auth = getAuth(); 
        auth.currentUser.getIdToken(/* forceRefresh */auth,true).then(function(idToken) {
            console.log(idToken);
            sessionStorage.setItem("token", idToken);
          }).catch(function(error) {
            // Handle error
          });
    }


    const classes = useStyles();
    return (
        <div className='container'>
            <div className="from-box col-lg-8 col-md-8 col-sm-12 mx-auto login-from">
                <h1 className='text-center text-primary'>Sign In with Google<InsertEmoticonSharpIcon></InsertEmoticonSharpIcon> </h1>
                <form>
                    {/* <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    {/* <button type="submit" class="btn btn-primary">Submit</button>
                    <Button variant="contained" color="primary">Submit<InsertEmoticonSharpIcon></InsertEmoticonSharpIcon></Button> */}
                </form>
                <div class="mb-3 text-center">
                        <span onClick={haldleGoogleSignIn} ><i class="fab fa-google ico"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Login;