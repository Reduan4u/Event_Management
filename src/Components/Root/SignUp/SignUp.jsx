import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);





    const [signUpError, setSignUpError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //const accepted = e.target.terms.checked;
        setSignUpError('');
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })


        // Password validation rules
        /* const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setSignUpError(
                'Password should be at least 8 characters long and contain at least one lowercase, uppercase letter, digit, and special character (!@#$%^&*()_+).'
            );
            return;
        }
        else if (!accepted) {
            setSignUpError("Please, Accept or Terms & Conditions");
            alert("Please, Accept or Terms & Conditions")
            return;
        } */

        /* createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSignUpError("Singed Up")

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(() => console.log('profile updated'))
                    .catch()

                sendEmailVerification(result.user)
                    .then(() => {
                        alert("please check your email");
                    })
            })
            .catch(error => {
                setSignUpError(error.message);
                alert(error.message)
            }) */
    }

    return (
        <div className="border">
            <div className="w-1/2 m-auto">
                <h1 className="text-4xl font-semibold text-center">Please Sign Up</h1>
                <form action="" className=" mt-10" onSubmit={handleSignUp}>
                    <input type="text" name="name" id="" className="w-1/2 border-2 border-black rounded-lg px-4 py-2 mb-4" required placeholder="Your Name" />
                    <br />
                    <input type="email" name="email" className="w-1/2 border-2 border-black rounded-lg px-4 py-2 " required placeholder="Email" />
                    <br />
                    <input type={showPassword ? "text" : "password"} name="password" className="w-1/2 border-2 border-black rounded-lg px-4 py-2 my-4" required placeholder="Password" /> <span onClick={() => setShowPassword(!showPassword)} className="btn">Show</span>
                    <br />
                    <input type="checkbox" name="terms" id="" className="mb-3" />
                    <label htmlFor="terms" className="ml-2" >Accept our Terms & Conditions</label>
                    <br />
                    <input type="submit" value="SignUp" className="btn btn-active btn-neutral w-1/2" />
                </form>
                {
                    signUpError == 0 && <p className="text-green-600 pb-10">{signUpError}
                    </p>
                }
                {
                    signUpError && <p className="text-red-600 pb-10 text-center">{signUpError}
                    </p>
                }
                <p className=" mb-10">Already have an account? Please, <strong><Link to="/logIn">LogIn</Link> </strong></p>
            </div>
        </div>
    );
};

export default SignUp;
