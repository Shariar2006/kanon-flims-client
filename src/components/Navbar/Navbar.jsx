import { NavLink } from "react-router-dom";



const Navbar = () => {

    const navLink = <div className="lg:flex text-lg font-semibold">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Home</NavLink></li>
        <li><NavLink to={'/ourStory'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Our Story</NavLink></li>
        <li><NavLink to={'/compony'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >The Compony</NavLink></li>
        <li><NavLink to={'/movies'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Movies</NavLink></li>
        <li><NavLink to={'/news'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >News</NavLink></li>
        <li><NavLink to={'/blogs'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Blogs</NavLink></li>
        <li><NavLink to={'/contact-us'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFF1B0] text-lg font-semibold rounded-lg px-1 py-2 " : "mx-1 text-[#EB671C]"}
        >Contact</NavLink></li>
    </div>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;