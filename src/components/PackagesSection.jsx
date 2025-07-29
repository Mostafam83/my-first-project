import React from 'react';
import PackageCard from './PackageCard';

const PackagesSection = () => {
    const packages = [
        {
            title: 'بسته ماهانه ۲۰ گیگ',
            price: '۱۲۰,۰۰۰',
            duration: 'اعتبار ۳۰ روزه',
            details: ['۲۰ گیگابایت اینترنت', '۱۰۰۰ دقیقه مکالمه ایرانسلی', '۵۰۰ پیامک به تمام خطوط']
        },
        {
            title: 'بسته ماهانه ۵۰ گیگ',
            price: '۱۸۰,۰۰۰',
            duration: 'اعتبار ۳۰ روزه',
            details: ['۵۰ گیگابایت اینترنت بین‌الملل', 'مکالمه نامحدود ایرانسلی', '۱۰۰۰ پیامک'],
            isFeatured: true // این بسته به عنوان ویژه نمایش داده می‌شود
        },
        {
            title: 'بسته سه ماهه ۱۰۰ گیگ',
            price: '۳۵۰,۰۰۰',
            duration: 'اعتبار ۹۰ روزه',
            details: ['۱۰۰ گیگابایت اینترنت', 'مکالمه نامحدود (تمام خطوط)', 'پیامک نامحدود']
        },
        {
            title: 'بسته سالانه ۵۰۰ گیگ',
            price: '۱,۲۰۰,۰۰۰',
            duration: 'اعتبار ۳۶۵ روزه',
            details: ['۵۰۰ گیگابایت اینترنت', 'مکالمه نامحدود دائمی', 'هدیه تولد']
        }
    ];

    return (
        <div className="bg-slate-100 dark:bg-slate-950 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark dark:text-white">
                        بسته‌های اینترنت همراه
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        بهترین بسته‌های اینترنت را برای خود انتخاب کنید.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;