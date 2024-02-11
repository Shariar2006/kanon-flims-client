import { Link, NavLink } from "react-router-dom";
import logo1 from '../../assets/logo1.png'
import { useState } from "react";



const Navbar = () => {
    const [isHover, setIsHover] = useState(false)

    const navLink = <div className="uppercase">
        <li><NavLink to={'/'}
            className= "m-1 text-base w-full text-[#FED252] hover:text-white"
        >Home</NavLink></li>
        <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/ourStory'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >Our Story</NavLink></li>
         <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/compony'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >The Compony</NavLink></li>
         <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/movies'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >Movies</NavLink></li>
         <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/news'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >News</NavLink></li>
         <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/blogs'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >Blogs</NavLink></li>
         <p className="w-full border-b border-gray-400 my-3"></p>
        <li><NavLink to={'/contact-us'}
            className= "mx-1 text-base w-full text-[#FED252] hover:text-white"
        >Contact</NavLink></li>
    </div>

    const handlemenu = () =>{
        setIsHover(!isHover)
    }

    return (
        <div className="lg:absolute">
            <div className=" bg-base-100 px-8">
                <div className=" flex justify-between lg:justify-normal items-center">
                <div className="dropdown mr-5 relative" 
                >
                    <div tabIndex={0} role="button" className="cursor-pointer "
                   onClick={handlemenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {
                        isHover ?
                    <ul tabIndex={0}  className=" dropdown-content mt-9 z-[1] p-3 rounded-md w-40 backdrop-opacity-0 backdrop-invert bg-gradient-to-r from-[#c09f3f90] to-[#00000000] ">
                        {navLink}
                    </ul> : ''
                    }
                </div>
                <div className="">
                    <Link to='/'>
                        <img className="w-24" src={logo1} alt="kanon flims logo" />
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;