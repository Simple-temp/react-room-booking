import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const Login = () => {
    const classes = useStyles();
    return (
        <div className='container'>
            <div className="from-box col-lg-8 col-md-8 col-sm-12 mx-auto login-from">
                <h1 className='text-center text-primary'>Login <InsertEmoticonSharpIcon></InsertEmoticonSharpIcon> </h1>
                <form>
                    <div class="mb-3">
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
                    </div>
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                    <Button variant="contained" color="primary">Submit<InsertEmoticonSharpIcon></InsertEmoticonSharpIcon></Button>
                </form>
            </div>
        </div>
    );
};

export default Login;