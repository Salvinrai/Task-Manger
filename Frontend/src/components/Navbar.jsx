import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import LOGO from '../assets/logo.png'
import LOGO2 from'../assets/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Task list', href: '/task' },
  { name: 'Add task', href: '/newtask' }
  
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (index) => {
    if (submenuOpen === index) {
      setSubmenuOpen(null);
    } else {
      setSubmenuOpen(index);
    }
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">techGeniusLabs</span>
            <img
              className="h-10 w-auto"
              src={LOGO}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <React.Fragment key={item.name}>
              {item.subPages ? (
                <div className="relative group">
                  <a
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 group relative flex items-center transition duration-300 ease-in-out hover:text-red-500 hover:underline-red-500"
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span>{item.name}</span>
                    <ChevronDownIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                  </a>
                  {submenuOpen === index && (
                    <div className="absolute bg-white py-1 mt-1 w-40 rounded-lg shadow-lg z-10">
                      {item.subPages.map(subPage => (
                        <a
                          key={subPage.name}
                          href={subPage.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {subPage.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 transition duration-300 ease-in-out hover:text-red-500 hover:underline-red-500"
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">techgenius.ai</span>
              <img className="h-8 w-auto" src={LOGO2} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <React.Fragment key={item.name}>
                    {item.subPages ? (
                      <div className="relative group">
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-red-500 hover:underline-red-500 group relative flex items-center transition duration-300 ease-in-out"
                          onClick={() => toggleSubmenu(index)}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                        </a>
                        {submenuOpen === index && (
                          <div className="absolute bg-white py-1 mt-1 w-40 rounded-lg shadow-lg z-10">
                            {item.subPages.map(subPage => (
                              <a
                                key={subPage.name}
                                href={subPage.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                              >
                                {subPage.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-red-500 hover:underline-red-500 transition duration-300 ease-in-out"
                      >
                        {item.name}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
