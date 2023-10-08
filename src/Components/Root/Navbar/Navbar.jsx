import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/services">SERVICES</NavLink></li>
        <li><NavLink to="/shop">SHOP</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/about-us">ABOUT US</NavLink></li>
    </>
    return (
        <div className="bg-sky-50 bg-opacity-10">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold"><img src="https://wpocean.com/html/tf/loveme/assets/images/logo.png " alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user ?
                            <div className="flex justify-center items-center">
                                {
                                    user.photoURL ? <label tabIndex={0} className="btn  btn-circle avatar pr-2">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                        :
                                        ""
                                }
                                <p>{user.displayName}</p>
                                <button onClick={handleSignOut} className="ml-1 btn btn-primary">Sign Out</button>
                            </div>

                            :
                            <Link to="/login">
                                <button className="btn btn-primary">Log In</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;