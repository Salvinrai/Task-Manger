import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import h2 from '../assets/assessment.png';

const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <div className="relative overflow-hidden bg-white py-10">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Earnest Fintech Limited
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Assessment for Full-Stack Developer Profile
                            
                            
                            
                        </p>
                        <p className="mt-1 text-xl text-gray-500">
                            Assessment Image is attached below for eassy access.
                            
                            
                            
                        </p>
                    </div>
                    <div className='mt-4'>
                            <a
                                href="/task"
                                className="inline-block sm:rounded-md border border-transparent bg-red-700 px-8 py-3 text-center font-medium text-white hover:bg-slate-800"
                            >
                                Task List
                            </a>
                            <a
                                href="/labsetup"
                                className="inline-block rounded-md border ml-2 border-transparent bg-red-700 px-8 py-3 text-center font-medium text-white hover:bg-slate-800"
                            >
                                Add Task
                            </a>
                        </div>
                    <div className="mt-10  items-center">
                        {/* Image on the right side */}
                        
                        <img src={h2} alt="Assessment Image" className="w-1/3 sm:w-1/2 lg:w-4/5 mx-auto" />

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
