import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  UserIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the dropdown state from local storage
    const savedDropdownState = localStorage.getItem('dropdownOpen');
    if (savedDropdownState === 'true') {
      setIsDropdownOpen(true);
    }

    // Set active item based on current route
    setActiveItem(router.pathname);
  }, [router.pathname]);

  const toggleDropdown = () => {
    const newState = !isDropdownOpen;
    setIsDropdownOpen(newState);
    localStorage.setItem('dropdownOpen', newState);
  };

  return (
    <aside className="fixed top-16 left-0 h-screen bg-gradient-to-r from-blue-700 to-blue-600 shadow-md border-r">
      <div className="px-4 py-6 space-y-4">
        <ul className="space-y-1">
          <li>
            <Link href="/" passHref>
              <div
                className={`flex items-center rounded-lg px-4 py-4 text-lg font-medium text-white ${
                  activeItem === '/' ? 'bg-blue-800' : 'hover:bg-blue-800'
                } transition-colors duration-200 cursor-pointer`}
              >
                <HomeIcon className="h-5 w-5 text-white mr-3" />
                Overview | Ringkasan
              </div>
            </Link>
          </li>

          <li>
            <div className="group cursor-pointer">
              <div
                onClick={toggleDropdown}
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-4 text-lg font-medium text-white hover:bg-blue-800 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-white mr-3" />
                  Langkah Penggunaan
                </span>
                <span
                  className={`shrink-0 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              {isDropdownOpen && (
                <div className="max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <Link href="/Admin" passHref>
                        <div
                          className={`flex items-center rounded-lg px-4 py-2 text-lg font-medium text-white ${
                            activeItem === '/Admin' ? 'bg-blue-800' : 'hover:bg-blue-800'
                          } transition-colors duration-200 cursor-pointer`}
                        >
                          <ShieldCheckIcon className="h-5 w-5 text-white mr-3" />
                          Admin
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/User" passHref>
                        <div
                          className={`flex items-center rounded-lg px-4 py-2 text-lg font-medium text-white ${
                            activeItem === '/User' ? 'bg-blue-800' : 'hover:bg-blue-800'
                          } transition-colors duration-200 cursor-pointer`}
                        >
                          <UserIcon className="h-5 w-5 text-white mr-3" />
                          User
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
        <div className="mt-1">
          <Link href="/faq" passHref>
            <div
              className={`flex items-center rounded-lg px-4 py-4 text-lg font-medium text-white ${
                activeItem === '/faq' ? 'bg-blue-800' : 'hover:bg-blue-800'
              } transition-colors duration-200 cursor-pointer`}
            >
              <InformationCircleIcon className="h-5 w-5 text-white mr-3" />
              FAQ
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
