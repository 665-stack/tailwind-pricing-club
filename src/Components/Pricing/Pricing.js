import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Secure, high-speed VPN', 'Malware portection',
                'Tracker and ad-blocker',
                'Free access',
                'Secure transention',
                'Block google ads'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Secure, high-speed VPN', 'Malware portection',
                'Tracker and ad-blocker',
                'CP password manager',
                'Data breach scanner',
                'Secure Cookies '
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Secure, high-speed VPN', 'Malware portection',
                'Tracker and ad-blocker',
                'CP password manager',
                'Data breach scanner',
                '1TB cloud storage'
            ]
        }
    ]
    return (
        <div className='bg-purple-300 px-6 sm:px-6 lg:px-24 mt-8 pb-12 pt-12 rounded-lg mx-6 sm:mx-3 md:mx-0 lg:mx-8 mb-12'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum accusamus, autem deleniti quo pariatur repellat voluptate.</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {
                    pricingOptions.map(option => <PricingOption option={option} key={option.id}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;