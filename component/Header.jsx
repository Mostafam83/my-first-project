import { useState } from 'react';
import { FiSearch } from "react-icons/fi";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileSearchOpen) setIsMobileSearchOpen(false); 
    };

    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col">
            
            <div className="w-full h-12 bg-black hidden lg:flex justify-between items-center px-4 sm:px-6 lg:px-8 relative z-20">
                
                <div className="text-white flex items-center text-sm sm:text-base">
                    <div className="h-8 bg-yellow-400 mx-1 sm:mx-2 flex justify-center items-center rounded-md px-2 sm:px-3">
                        <p className="text-xs sm:text-sm text-black whitespace-nowrap">مشترکان شخصی</p>
                    </div>
                    <a href="#" className="h-8 mx-1 sm:mx-2">
                        <p className="text-xs sm:text-sm whitespace-nowrap">مشترکان سازمانی</p>
                    </a>
                </div>

               
                <div className="flex text-white items-center text-base"> 
                    <ul className="flex font-serif">
                        <li className="px-2 xl:px-3 text-[14px] xl:text-[15px] whitespace-nowrap"><a href="#">اخبار</a></li>
                        <li className="px-2 xl:px-3 text-[14px] xl:text-[15px] whitespace-nowrap"><a href="#">بازارگاه ایرانسل</a></li>
                        <li className="px-2 xl:px-3 text-[14px] xl:text-[15px] whitespace-nowrap"><a href="#">ترابرد به ایرانسل</a></li>
                    </ul>
                </div>
            </div>

           
            <div className="w-full h-16 bg-yellow-400 rounded-md flex justify-between items-center px-4 sm:px-6 lg:px-8 relative z-20">
                
                <div className="flex items-center flex-grow"> 
                    {isMobileSearchOpen && (
                        <div className="w-full md:hidden pr-2">
                            <input
                                type="text"
                                className="w-full h-10 px-4 border border-black rounded-3xl text-gray-900 placeholder-gray-600 text-right text-sm"
                                placeholder="جستجو در ایرانسل..."
                                autoFocus 
                            />
                        </div>
                    )}

                   
                    {!isMobileSearchOpen && (
                        <div className="flex items-center">
                            <div className="h-auto w-auto">
                                <a href="#">
                                    <img src="/image/mtn-irancell.png" alt="Irancell Logo" className="h-9 sm:h-10 md:h-12 w-auto" />
                                </a>
                            </div>
                            <div className="hidden lg:flex items-center ml-3 sm:ml-4">
                                <ul className="flex h-full items-center">
                                    <li className="px-1 sm:px-2 xl:px-3 hover:underline h-full flex items-center">
                                        <a href="#" className="text-sm sm:text-base">محصولات</a>
                                    </li>
                                    <li className="px-1 sm:px-2 xl:px-3 hover:underline h-full flex items-center">
                                        <a href="#" className="text-sm sm:text-base">خدمات</a>
                                    </li>
                                    <li className="px-1 sm:px-2 xl:px-3 hover:underline h-full flex items-center">
                                        <a href="#" className="text-sm sm:text-base">پشتیبانی</a>
                                    </li>
                                    <li className="px-1 sm:px-2 xl:px-3 hover:underline h-full flex items-center">
                                        <a href="#" className="text-sm sm:text-base">فیبر‌نوری</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>


                
                <div className={`flex items-center ${isMobileSearchOpen && 'md:hidden'}`}>
                    {/* Desktop Search Bar */}
                    <div className="hidden md:flex items-center mx-2">
                        <div className="relative w-36 lg:w-48 xl:w-52">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <FiSearch className="text-black text-lg lg:text-xl" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pr-10 pl-2 py-1.5 sm:py-2 border border-black rounded-3xl text-gray-900 placeholder-gray-600 text-right text-xs sm:text-sm"
                                placeholder="جستجو کنید..."
                            />
                        </div>
                    </div>

       
                    {!isMobileSearchOpen && (
                      <div className="flex items-center">
                        <div className="mx-1 sm:mx-1.5">
                            <a href="#" className="font-serif text-xs sm:text-sm md:text-base">En</a>
                        </div>
                        <div className="mx-1 sm:mx-1.5">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                                    <path d="M15 6C15 7.65685 13.6569 9 12 9V11C14.7614 11 17 8.76142 17 6H15ZM12 9C10.3431 9 9 7.65685 9 6H7C7 8.76142 9.23858 11 12 11V9ZM9 6C9 4.34315 10.3431 3 12 3V1C9.23858 1 7 3.23858 7 6H9ZM12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1V3ZM9 14H15V12H9V14ZM15 20H9V22H15V20ZM9 20C7.34315 20 6 18.6569 6 17H4C4 19.7614 6.23858 22 9 22V20ZM18 17C18 18.6569 16.6569 20 15 20V22C17.7614 22 20 19.7614 20 17H18ZM15 14C16.6569 14 18 15.3431 18 17H20C20 14.2386 17.7614 12 15 12V14ZM9 12C6.23858 12 4 14.2386 4 17H6C6 15.3431 7.34315 14 9 14V12Z" fill="#202020"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="mx-1 sm:mx-1.5">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                                    <path d="M16.2993 6.52381C16.2993 6.48128 16.2987 6.43888 16.2976 6.39663C16.2337 3.957 14.3348 2 12.0017 2C9.69007 2 7.80471 3.92118 7.70801 6.32945C7.70542 6.3939 7.70411 6.45869 7.70411 6.52381M16.2993 6.52381H7.70411M16.2993 6.52381H17.4242C19.2169 6.52381 20.1132 6.52381 20.6257 7.12652C21.1382 7.72924 21.0392 8.667 20.8412 10.5425L20.5869 12.9515C20.1828 16.7799 19.9808 18.694 18.757 19.847C17.5332 21 15.6894 21 12.0017 21C8.31403 21 6.47019 21 5.24641 19.847C4.02263 18.694 3.82058 16.7799 3.41648 12.9515L3.1622 10.5425C2.96422 8.667 2.86524 7.72924 3.37772 7.12652C3.8902 6.52381 4.78655 6.52381 6.57924 6.52381H7.70411" stroke="#202020" strokeWidth="2"></path>
                                </svg>
                            </a>
                        </div>
                      </div>
                    )}

                   
                    <div className="md:hidden flex items-center ml-2 sm:ml-3">
                        <button onClick={toggleMobileSearch} aria-label={isMobileSearchOpen ? "Close search" : "Open search"}>
                            {isMobileSearchOpen ? (
                                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> 
                            ) : (
                                <FiSearch className="text-black text-xl sm:text-2xl" />
                            )}
                        </button>
                    </div>

                    
                    {!isMobileSearchOpen && (
                        <div className="lg:hidden flex items-center ml-2 sm:ml-3">
                            <button onClick={toggleMobileMenu} aria-label="Open menu">
                                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>

        
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-0 pt-28 pb-6 bg-yellow-300 shadow-lg z-10 h-screen overflow-y-auto">
                    <div className="px-4 sm:px-6">
                        <ul className="flex flex-col space-y-4">
                            
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>محصولات</a></li>
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>خدمات</a></li>
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>پشتیبانی</a></li>
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>فیبر‌نوری</a></li>
                            <hr className="my-4 border-gray-500"/>
                            
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>اخبار</a></li>
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>بازارگاه ایرانسل</a></li>
                            <li><a href="#" className="block py-2 text-black hover:text-gray-700 text-lg" onClick={toggleMobileMenu}>ترابرد به ایرانسل</a></li>
                            
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}