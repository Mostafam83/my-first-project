import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer = () => {
    const linkColumns = [
        {
            title: 'محصولات و خدمات',
            links: ['اینترنت همراه', 'اینترنت ثابت', 'بسته‌های ترکیبی', 'رومینگ بین‌الملل']
        },
        {
            title: 'پشتیبانی',
            links: ['پاسخ به سوالات متداول', 'تماس با ما', 'مراکز خدمات', 'پیگیری شکایات']
        },
        {
            title: 'درباره ایرانسل',
            links: ['اخبار', 'فرصت‌های شغلی', 'مناقصه‌ها و مزایده‌ها', 'ارتباط با رسانه‌ها']
        },
    ];

    return (
        <footer className="bg-black text-slate-300 pt-16" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {linkColumns.map(col => (
                        <div key={col.title}>
                            <h3 className="font-extrabold text-white text-lg mb-4">{col.title}</h3>
                            <ul className="space-y-3 text-sm leading-6">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-yellow-400 transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="font-extrabold text-white text-lg mb-4">ما را دنبال کنید</h3>
                        <div className="flex items-center gap-x-4 mb-6 text-xl">
                            <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><FaInstagram /></a>
                            <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><FaGithub /></a>
                            <a href="#" className="hover:text-yellow-400 transition-transform hover:scale-110"><FaTelegramPlane /></a>
                        </div>

                        <h3 className="font-extrabold text-white text-lg mb-4 mt-8">دانلود اپلیکیشن</h3>
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">

               
                            <a
                                href="#"
                                className="bg-gray-700 hover:bg-gray-600 rounded-xl px-4 py-3 flex items-center gap-3 transition-colors"
                            >
                                <SiGoogleplay className="text-green-400 text-3xl" />
                                <div className="text-right">
                                    <p className="text-xs text-slate-400">دریافت از</p>
                                    <p className="font-bold text-white text-sm">گوگل پلی</p>
                                </div>
                            </a>

                            
                            <a
                                href="#"
                                className="bg-gray-700 hover:bg-gray-600 rounded-xl px-4 py-3 flex items-center gap-3 transition-colors"
                            >
                                <SiAppstore className="text-blue-400 text-3xl" />
                                <div className="text-right">
                                    <p className="text-xs text-slate-400">دانلود از</p>
                                    <p className="font-bold text-white text-sm">اپ استور</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

       
                <div className="mt-12 py-6 border-t border-gray-700 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} کلیه حقوق این وب‌سایت متعلق به ایرانسل است.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
