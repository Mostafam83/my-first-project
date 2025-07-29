import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col shadow-2xl">
            {/* نوار بالا */}
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
                        <li className="px-2 text-sm xl:px-3"><a href="#">اخبار</a></li>
                        <li className="px-2 text-sm xl:px-3"><a href="#">بازارگاه ایرانسل</a></li>
                        <li className="px-2 text-sm xl:px-3"><a href="#">ترابرد به ایرانسل</a></li>
                    </ul>
                </div>
            </div>

            {/* نوار اصلی */}
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
                                <Link to="/">
                                    <img src="/image/mtn-irancell.png" alt="Irancell Logo" className="h-9 sm:h-10 md:h-12 w-auto" />
                                </Link>
                            </div>
                            <div className="hidden lg:flex items-center ml-3 sm:ml-4">
                                <ul className="flex h-full items-center">
                                    <li className="px-2 underline-hover">
                                        <Link to="/products" className="text-sm sm:text-base">محصولات</Link>
                                    </li>
                                    <li className="px-2 underline-hover">
                                        <Link to="/services" className="text-sm sm:text-base">خدمات</Link>
                                    </li>
                                    <li className="px-2 underline-hover">
                                        <Link to="/support" className="text-sm sm:text-base">پشتیبانی</Link>
                                    </li>
                                    <li className="px-2 underline-hover">
                                        <Link to="/fiber" className="text-sm sm:text-base">فیبر نوری</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`flex items-center ${isMobileSearchOpen && 'md:hidden'}`}>
                    {/* جستجو در دسکتاپ */}
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
                            <div className="mx-1 sm:mx-1.5 font-serif text-xs sm:text-sm md:text-base">En</div>
                            <div className="mx-1 sm:mx-1.5">
                                <a href="#"><svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none"><path d="M15 6..." /></svg></a>
                            </div>
                            <div className="mx-1 sm:mx-1.5">
                                <a href="#"><svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none"><path d="..." /></svg></a>
                            </div>
                        </div>
                    )}

                    {/* آیکون‌های موبایل */}
                    <div className="md:hidden flex items-center ml-2 sm:ml-3">
                        <button onClick={toggleMobileSearch}>
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
                            <button onClick={toggleMobileMenu}>
                                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* منوی موبایل */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-0 pt-28 pb-6 bg-yellow-300 shadow-lg z-10 h-screen overflow-y-auto">
                    <div className="px-4 sm:px-6">
                        <ul className="flex flex-col space-y-4 text-lg">
                            <li><Link to="/products" onClick={toggleMobileMenu}>محصولات</Link></li>
                            <li><Link to="/services" onClick={toggleMobileMenu}>خدمات</Link></li>
                            <li><Link to="/support" onClick={toggleMobileMenu}>پشتیبانی</Link></li>
                            <li><Link to="/fiber" onClick={toggleMobileMenu}>فیبر نوری</Link></li>
                            <hr className="my-4 border-gray-500" />
                            <li><a href="#" onClick={toggleMobileMenu}>اخبار</a></li>
                            <li><a href="#" onClick={toggleMobileMenu}>بازارگاه ایرانسل</a></li>
                            <li><a href="#" onClick={toggleMobileMenu}>ترابرد به ایرانسل</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
