import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/service">SERVICE</NavLink></li>
        <li><NavLink to="/blog">BLOG</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/about-us">ABOUT US</NavLink></li>
    </>
    return (
        <div className="bg-base-200">
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
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar pr-2">
                        <div className="w-10 rounded-full">
                            <img src="https://th.bing.com/th/id/OIP.R87PbOkdc695AAZ-_qrLYwHaHk?w=197&h=201&c=7&r=0&o=5&pid=1.7" />
                        </div>
                    </label>
                    <a className="btn btn-primary">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;