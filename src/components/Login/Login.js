import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import  { doctorContext } from '../../App';
import login from '../../images/login.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    const [logInUser, setLogInUser] = useContext(doctorContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const loginInHandle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(result.user.email);
                sessionStorage.setItem('email', `${result.user.email}`);
                setLogInUser(result.user.email);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            
            });
    }
    //form submit
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div style={{ paddingLeft: '10%', marginTop: '10%' }} className="col-md-6 shadow p-3 mb-5 bg-body rounded">
                <h4 style={{ marginBottom: '14%' }} className="text-center text-brand">Login</h4>
                <center>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div style={{ width: '60%' }} class="input-group mb-3">
                            <input placeholder="User Name" className="form-control" {...register("userName", { required: true })} />
                            {errors.userName && <span>User Name is required</span>}
                        </div>
                        <div style={{ width: '60%' }} class="input-group mb-3">
                            <input className="form-control" placeholder="Password" {...register("Password", { required: true })} />
                            {errors.Password && <span>Phone number is required</span>}
                        </div>


                        <div style={{ width: '60%' }} class="input-group mb-3">
                            <input className="btn-brand" value="SUBMIT" type="submit" />
                        </div>

                    </form>
                </center>
                <center>
                    <div style={{ width: '60%' }} class="input-group mb-3">
                        <button onClick={() => loginInHandle()} className="form-control btn-brand">Google Sign In</button>
                    </div>
                </center>
            </div>
            <div className="col-md-6">
                <img style={{ width: '85%' }} className="img-fluid" src={login}></img>
            </div>
        </div>
    );
};

export default Login;