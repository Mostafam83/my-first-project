import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const PackageCard = ({ title, price, duration, details }) => {
    return (
        <div
            className="rounded-3xl p-6 flex flex-col border border-yellow-400 bg-[#1e1e1e] text-white 
                       shadow-xl shadow-yellow-300/30 transition-all duration-300 transform hover:-translate-y-2"
        >
            <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full self-start mb-4 shadow-sm">
                پیشنهاد ویژه
            </div>

            <h3 className="text-2xl font-extrabold mb-2 leading-snug text-yellow-300">
                {title}
            </h3>

            <p className="text-4xl font-black mb-3 tracking-tight text-white">
                {price}
                <span className="text-base font-medium mr-1">تومان</span>
            </p>

            <p className="text-sm mb-6 text-slate-300">
                {duration}
            </p>

            <ul className="space-y-3 text-right mb-8 flex-grow">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-300">
                        <FiCheckCircle className="ml-2 text-xl text-yellow-400" />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>

            <button
                className="w-full py-3 rounded-full font-bold text-sm bg-yellow-400 hover:bg-white 
                           text-gray-900 hover:text-black transition-all duration-300"
            >
                خرید و فعال‌سازی
            </button>
        </div>
    );
};

export default PackageCard;
