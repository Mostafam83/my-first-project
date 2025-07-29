import React from 'react';

const Fiber = () => {
  return (
    <section className="p-10 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">اینترنت فیبر نوری ایرانسل</h1>
      <p className="text-lg mb-4">سرعت بالاتر از تصور شما، با فیبر نوری</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">ثبت‌نام فیبر نوری</h3>
          <p>با چند کلیک ثبت‌نام کنید</p>
        </div>
        <div className="p-6 border rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">مناطق تحت پوشش</h3>
          <p>بررسی کنید آیا منطقه شما تحت پوشش است یا خیر</p>
        </div>
      </div>
    </section>
  );
};

export default Fiber;
