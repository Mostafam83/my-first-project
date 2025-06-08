import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cards = [
  { title: "سرویس رومینگ ", desc: " با استفاده از خدمات رومینگ می‌توانید خارج از ایران هم به اینترنت دسترسی داشته باشید.", img: "/public/image/Frame-1-3.svg" },
  { title: "خرید شارژ", desc: "با تنها چند کلیک سیم کارت خود را به مقدار لازم شارژ کنید.", img: "/public/image/Frame-2-3.svg" },
  { title: "پیام‌گیر صوتی", desc: "حتی در زمانی که پاسخگو نیستید، پیام دیگران را دریافت کنید.", img: "/public/image/Frame-4-1.svg" },
  { title: "پرداخت قبض سیم کارت", desc: "به راحتی و در هر زمان قبض سیم کارت خود و دیگران رو پرداخت کنید.", img: "/public/image/Frame-3-3.svg" },
  { title: "گوشی موبایل", desc: "خرید گوشی موبایل و لوازم جانبی آن از فروشگاه‌ معتبر و مورد تایید ایرانسل.", img: "/public/image/Layer_1-13.svg" },
  { title: "بسته اینترنت اختصاصی", desc: "بسته‌های اینترنتی که مخصوص شماست در دسترس شما خواهد بود.", img: "/public/image/TwoTone-1.svg" },
  { title: "بسته مکالمه", desc: "با خرید بسته‌های مکالمه، نگران هزینه تماس خود نباشید.", img: "/public/image/Frame-7.svg" },
  { title: "سرویس پرداخت اعتباری", desc: "بدون پرداخت مبلغ، محصولات و خدمات ایرانسل را خریداری کنید.", img: "/public/image/Frame-8.svg" },
  { title: "حراج شماره رند", desc: "مدیریت خدمات ایرانسل", img: "/public/image/Frame-1000002738.svg" },
];

export default function Sugest() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (idx) => {
    const container = ref.current;
    const card = container.children[idx];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
      setActiveIndex(idx);
    }
  };

  const next = () => scrollTo((activeIndex + 1) % cards.length);
  const prev = () => scrollTo((activeIndex - 1 + cards.length) % cards.length);

  const onScroll = () => {
    const container = ref.current;
    const children = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;
    const idx = children.findIndex((c) => {
      const { left, width } = c.getBoundingClientRect();
      const parentLeft = container.getBoundingClientRect().left;
      const centerCard = left - parentLeft + width / 2;
      return Math.abs(center - (container.scrollLeft + centerCard)) < width / 2;
    });
    if (idx >= 0) setActiveIndex(idx);
  };

  useEffect(() => scrollTo(activeIndex), []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-black z-0"
        style={{
          backgroundImage: "url('/public/image/background-offers-phone.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-10">
        <h2 className="text-white text-3xl font-bold mb-6">پیشنهادهای ایرانسل</h2>

        <div className="relative w-3/4">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black border border-yellow-400 rounded-full p-3 z-10"
          >
            <FaChevronLeft className="text-yellow-400" />
          </button>

          <div
            ref={ref}
            onScroll={onScroll}
            className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-6 snap-x snap-mandatory px-10"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className={`snap-center flex-shrink-0 w-64 h-96 rounded-xl p-4 flex flex-col items-center justify-between text-white transition-all duration-300 ${
                  i === activeIndex
                    ? "scale-105 opacity-100 shadow-lg shadow-yellow-400"
                    : "scale-95 opacity-50 blur-sm"
                }`}
                style={{ backgroundColor: "#1f1f1f" }}
              >
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <img src={c.img} className="w-12 h-12" alt={c.title} />
                </div>
                <h3 className="text-lg font-bold mt-4 text-center">{c.title}</h3>
                <p className="text-sm text-gray-300 text-center">{c.desc}</p>
                <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-3xl hover:shadow hover:shadow-yellow-200 transition">
                  بیشتر بدانید
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black border border-yellow-400 rounded-full p-3 z-10"
          >
            <FaChevronRight className="text-yellow-400" />
          </button>
        </div>

        <div className="flex gap-2 mt-6">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full border border-yellow-400 transition-all ${
                i === activeIndex ? "bg-yellow-400" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
