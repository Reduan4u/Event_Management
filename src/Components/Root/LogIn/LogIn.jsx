import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
    /* const [signInError, setSignInError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    //const [showPassword, setShowPassword] = useState(false);


    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email, password);
        setSignInError('');
        setSuccess(''); */


    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error);
            })
    }


    /* signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if (result.user.emailVerified) {
                setSuccess('User Logged in Successfully.')
                alert("Successfully Logged In")
            }
            else {
                alert('Please verify your email address.')
            }
        })
        .catch(error => {
            console.log(error);
            setSignInError(error.message);
            alert("invalid-login-credentials")
        }) */


    /* const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please provide an email', emailRef.current.value)
            return;
        }
        else if
            (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('please write a valid email')
            return;
        }
     
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please,Check your Email")
            })
            .catch(error => {
                console.log(error);
            })
    } */


    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen w-10/12 m-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            {/* {
                                signInError == 0 && <p className="text-green-600 pb-10">{signInError}
                                </p>
                            }
                            {
                                success && <p className="text-red-600 pb-10 text-center">{success}
                                </p>
                            } */}
                            <p className="text-center">New to this website? Please, <strong><Link to="/signUp">SignUp</Link> </strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LogIn;