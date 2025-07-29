import React from 'react';

const Products = () => {
  return (
    <section className="p-10 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">محصولات ایرانسل</h1>
      <p className="text-lg mb-4">سیم‌کارت دائمی، اعتباری، مودم و بسته‌های متنوع اینترنت</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold text-xl mb-2">سیم‌کارت اعتباری</h3>
          <p>خرید، فعال‌سازی، و مشاهده بسته‌ها</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold text-xl mb-2">مودم اینترنت</h3>
          <p>مودم‌های ثابت و همراه ایرانسل</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold text-xl mb-2">سیم‌کارت دائمی</h3>
          <p>طرح‌های ویژه برای کاربران دائمی</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
