import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';

const LogIn = () => {
    const emailRef = useRef(null);
    const [signInError, setSignInError] = useState('');
    const { signIn, passwordReset } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setSignInError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1000
                });
            })
            .catch(error => {
                console.error(error);
                setSignInError('Invalid User Email and Password');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid User Email and Password',
                })
            })
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire(
                'Forgot Password?',
                'Please, Provide your Email',
                'question'
            )
            return;
        }
        else if
            (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Wrong Email Address!',
                text: 'Please, Provide Your Valid Email',
            })
            return;
        }

        passwordReset(email)
            .then(() => {
                alert("Please,Check your Email")
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen w-10/12 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <h1 className="text-3xl py-6 font-bold">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        ref={emailRef}
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {
                                signInError && <p className="text-center text-red-600 pb-4">Invalid User Email and Password
                                </p>
                            }
                            <p className="text-center">New to this website? Please, <strong><Link to="/signUp">SignUp</Link> </strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LogIn;