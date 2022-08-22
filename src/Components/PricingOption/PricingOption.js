import React from 'react';

const PricingOption = ({ option }) => {
    const { name, price } = option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-purple-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-semibold		'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;