
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import PriceBenefit from '../PriceBenefit/PriceBenefit';




const PricingOption = ({ option }) => {
    const { name, price, benefits } = option;

    return (
        <div className='bg-white p-4 rounded-lg mt-4'>
            <h2 className='bg-purple-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-semibold		'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div className='mt-2'>
                <h3 className='text-xl font-medium	 text-left'>Benefits: </h3>
                {
                    benefits.map(benefit => <PriceBenefit benefit={benefit}></PriceBenefit>)

                }
                <button className='bg-purple-500 flex justify-center w-full py-2 rounded text-white'>Buy Now <ArrowRightIcon className='w-6 h-6 ml-1'></ArrowRightIcon></button>

            </div>
        </div>
    );
};

export default PricingOption;