import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 }
    ]
    return (
        <div className='bg-purple-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum accusamus, autem deleniti quo pariatur repellat voluptate.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-10'>
                {
                    pricingOptions.map(option => <PricingOption option={option} key={option.id}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;