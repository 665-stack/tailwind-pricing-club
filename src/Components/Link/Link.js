import React from 'react';
//  bg-neutral-700/60 hover:bg-neutral-700/100 text-purple-300  shadow-md shadow-purple-400/50 rounded-md py-1 px-4
const Link = ({ route }) => {
    const { name, link } = route;
    return (
        <li className='my-2 md:mx-5   bg-neutral-700/60 hover:bg-neutral-700/100 text-purple-300 shadow shadow-purple-400/50 py-1 md:px-4 rounded-md'>
            <a href={link}>{name}</a>

        </li>
    );
};

export default Link;