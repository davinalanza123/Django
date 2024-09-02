import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  UserIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('/');
  const router = useRouter();

  const handleClick = (item, route) => {
    setActiveItem(item);
    router.push(route);
  };

  return (
    <aside className="container mx-auto flex flex-col h-auto w-1/2 border-r bg-gradient-to-r from-blue-700 to-blue-600 shadow-md">
      <div className="px-4 py-6 space-y-4">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              onClick={() => handleClick('/', '/')}
              className={`flex items-center rounded-lg px-4 py-4 text-sm font-medium text-white ${
                activeItem === '/' ? 'bg-blue-800' : 'hover:bg-blue-800'
              } transition-colors duration-200`}
            >
              <HomeIcon className="h-5 w-5 text-white mr-3" />
              Overview | Ringkasan
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-4 text-white hover:bg-blue-800 transition-colors duration-200">
                <span className="flex items-center text-sm font-medium">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-white mr-3" />
                  Langkah Penggunaan
                </span>
                <span className="shrink-0 transition-transform duration-300 group-open:rotate-180">
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
              </summary>
              <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-40">
                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      onClick={() => handleClick('admin', '/Admin')}
                      className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white ${
                        activeItem === 'admin' ? 'bg-blue-800' : 'hover:bg-blue-800'
                      } transition-colors duration-200`}
                    >
                      <ShieldCheckIcon className="h-5 w-5 text-white mr-3" />
                      Admin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleClick('user', '/User')}
                      className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white ${
                        activeItem === 'user' ? 'bg-blue-800' : 'hover:bg-blue-800'
                      } transition-colors duration-200`}
                    >
                      <UserIcon className="h-5 w-5 text-white mr-3" />
                      User
                    </a>
                  </li>
                </ul> {/* Added closing tag for this ul */}
              </div>
            </details>
          </li>
        </ul> {/* Added closing tag for this ul */}
        <div className="mt-1">
          <div
            onClick={() => handleClick('help', '/Help')}
            className={`flex items-center rounded-lg px-4 py-4 text-sm font-medium text-white ${
              activeItem === 'help' ? 'bg-blue-800' : 'hover:bg-blue-800'
            } transition-colors duration-200 cursor-pointer`}
          >
            <InformationCircleIcon className="h-5 w-5 text-white mr-3" />
            Help
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
