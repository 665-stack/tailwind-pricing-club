import React from 'react';

const Link = ({ route }) => {
    const { name, link } = route;
    return (
        <li className='mr-12 bg-neutral-700/60 hover:bg-neutral-700/100 text-gray-300 rounded-md py-1 px-4'>
            <a href={link}>{name}</a>

        </li>
    );
};

export default Link;