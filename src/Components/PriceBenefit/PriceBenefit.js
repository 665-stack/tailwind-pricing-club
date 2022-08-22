import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
const PriceBenefit = ({ benefit }) => {

    return (
        <div>
            <p className='flex my-2 items-center rounded-md'>
                <CheckCircleIcon className='w-5  text-purple-500 mr-1.5'></CheckCircleIcon>
                <span>{benefit}</span>
            </p>
        </div>

    );
};

export default PriceBenefit;