import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const Navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        setSignUpError('');

        // Password validation rules
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Weak Password',
                footer: 'Password should be at least 8 characters long and contain at least one lowercase, uppercase letter, digit, and special character (!@#$%^&*()_+).'
            })
            setSignUpError(
                'Password should be at least 8 characters long and contain at least one lowercase, uppercase letter, digit, and special character (!@#$%^&*()_+).'
            );
            return;
        }
        else if (!accepted) {
            setSignUpError("Please, Accept or Terms & Conditions");
            Swal.fire(
                'Error?',
                'Please, Accept or Terms & Conditions',
                'question'
            );
            return;
        }

        createUser(email, password)
            .then(result => {
                Navigate('/login')
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Signed Up',
                    showConfirmButton: false,
                    timer: 1500
                })
                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: ""
                })
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Something went wrong!!!',
                            footer: 'Please try again'
                        })
                    })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong!!!',
                    footer: 'Please try again'
                })
            })
    }

    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen w-10/12 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <h1 className="text-3xl py-6 font-bold">YOUR JOURNEY, OUR EXPERTISE</h1>
                        <p>Welcome to RR Wedding Planner, where your dream wedding begins its extraordinary journey.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSignUp}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email"
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
                                </div>
                                <input type="checkbox" name="terms" id="2" className="mb-3" />
                                <label htmlFor="terms" className="ml-2" >Accept our Terms & Conditions</label>

                                <div className="form-control mt-6">
                                    <button type="submit" value="SignUp" className="btn btn-primary">SignUp</button>
                                </div>
                            </form>

                            {
                                signUpError && <p className="text-red-600 pb-10 text-center">{signUpError}
                                </p>
                            }

                            <p className="text-center">Already have an Account? Please, <strong><Link to="/login">Log In</Link> </strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


