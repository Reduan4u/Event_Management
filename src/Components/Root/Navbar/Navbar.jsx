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
        <div className="bg-sky-100">
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
                    <Link to="/"> <div className="sm:flex md:flex lg:flex justify-center items-center"><img className="" src="https://wpocean.com/html/tf/loveme/assets/images/section-title.png" alt="" /><p className="font-roboto text-gray-900 opacity-90 text-center  text-base sm:text-lg md:text-xl lg:text-2xl">RR Wedding Planner </p></div></Link>
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
                                <div className=" sm:flex md:flex lg:flex justify-center items-center">
                                    {
                                        user.photoURL ?
                                            <div className="avatar">
                                                <div className="w-4 sm:w-6 md:w-8 lg:w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </div>
                                            :
                                            <div className="avatar flex justify-center items-center">
                                                <div className="w-4 sm:w-6 md:w-8 lg:w-10 inline-block">
                                                    <img className="" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
                                                </div>
                                            </div>
                                    }
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center">{user.displayName}</p>
                                </div>
                                <button onClick={handleSignOut} className="ml-1 btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2">Sign Out</button>
                            </div>

                            :
                            <Link to="/login">
                                <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2">Log In</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;