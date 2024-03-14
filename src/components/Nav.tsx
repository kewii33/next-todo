import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="border-b-[1px] w-100%">
      <nav className="max-w-[1200px] min-w-[800px] h-[120px] mx-auto pt-[60px]">
        <ul className="flex justify-between flex items-center">
          <div className="font-bold text-[24px] text-[#444]">
            <li>
              <Link href="/">TODOLAB</Link>
            </li>
          </div>
          <div className="flex text-[#555]">
            <Link href="/about">
              <li className="flex justify-center hover:bg-[#555] hover:text-white font-bold text-[15px] w-[150px] h-[60px] px-[40px] py-[20px] transition-all duration-500">
                About
              </li>
            </Link>
            <Link href="/report">
              <li className="flex justify-center hover:bg-[#555] hover:text-white font-bold text-[15px] w-[150px] h-[60px] px-[40px] py-[20px] transition-all duration-500">
                Report
              </li>
            </Link>
            <Link href="/todo-csr">
              <li className="flex justify-center hover:bg-[#555] hover:text-white font-bold text-[15px] w-[160px] h-[60px] px-[40px] py-[20px] transition-all duration-500">
                Todo✏️
              </li>
            </Link>
            <Link href="/todos-ssr">
              <li className="flex justify-center hover:bg-[#555] hover:text-white font-bold text-[15px] w-[160px] h-[60px] px-[40px] py-[20px] transition-all duration-500">
                Todos📋
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
