import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const PackageCard = ({ title, price, duration, details, isFeatured = false }) => {
    return (
        <div className={`rounded-2xl p-6 flex flex-col transition-all duration-300 transform hover:-translate-y-2
                         ${isFeatured 
                            ? 'bg-irancell-dark text-white shadow-2xl shadow-yellow-500/20' 
                            : 'bg-white dark:bg-slate-800 shadow-lg'}`
                      }>
            {isFeatured && (
                <div className="bg-irancell-yellow text-irancell-dark text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                    پیشنهاد ویژه
                </div>
            )}
            
            <h3 className={`text-xl font-extrabold mb-2 ${isFeatured ? 'text-irancell-yellow' : 'text-text-dark dark:text-white'}`}>
                {title}
            </h3>
            <p className={`text-4xl font-bold mb-4 ${isFeatured ? 'text-white' : 'text-text-dark dark:text-white'}`}>
                {price}
                <span className="text-lg font-normal"> تومان</span>
            </p>
            <p className={`text-sm mb-6 ${isFeatured ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                {duration}
            </p>
            
            <ul className="space-y-3 text-right mb-8 flex-grow">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                        <FiCheckCircle className={`ml-3 ${isFeatured ? 'text-irancell-yellow' : 'text-green-500'}`} />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3 rounded-full font-bold transition-all duration-300
                               ${isFeatured 
                                  ? 'bg-irancell-yellow text-irancell-dark hover:bg-white' 
                                  : 'bg-slate-200 dark:bg-slate-700 text-text-dark dark:text-white hover:bg-irancell-yellow hover:text-irancell-dark'}`
                            }>
                خرید و فعال‌سازی
            </button>
        </div>
    );
};

export default PackageCard;