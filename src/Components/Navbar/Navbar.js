import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/.home' },
        { id: 2, name: 'Shop', link: '/.shop' },
        { id: 3, name: 'Deals', link: '/.deals' },
        { id: 4, name: 'Coupons', link: '/.coupons' },
        { id: 5, name: 'Contact', link: '/.contact' },
    ];
    return (
        <nav className='bg-neutral-900 py-1.5  mb:py-0'>
            <div onClick={() => setOpen(!open)} className='w-7 h-7 ml-3  md:hidden text-purple-300'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <ul className={`md:flex pt-2 pb-5 md:pt-0 md:pb-0 px-20 w-full rounded-b-md justify-center bg-neutral-900/95 absolute md:static    duration-500 ease-out ${open ? 'top-9' : 'top-[-500px]'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;