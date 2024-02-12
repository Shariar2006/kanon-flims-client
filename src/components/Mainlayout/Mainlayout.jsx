import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-5xl mx-auto'>
            <Outlet></Outlet>
            </div>
        </>
    );
};

export default Mainlayout;