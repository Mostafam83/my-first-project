import React from 'react';

const Services = () => {
  return (
    <section className="p-10 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">خدمات ایرانسل</h1>
      <p className="text-lg mb-4">از خرید بسته تا خدمات ارزش افزوده</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <li className="border p-6 rounded-xl shadow">خرید بسته اینترنت</li>
        <li className="border p-6 rounded-xl shadow">خدمات USSD و اپلیکیشن</li>
        <li className="border p-6 rounded-xl shadow">آوای انتظار، پیامک تبلیغاتی و غیره</li>
      </ul>
    </section>
  );
};

export default Services;
