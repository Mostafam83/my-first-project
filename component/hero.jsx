// مسیر فایل: IRAN2-test/component/Hero.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'; // CSS برای دکمه‌های ناوبری
import 'swiper/css/pagination';
import './HeroSlider.css'; // فایل CSS سفارشی

const slidesContent = [ // ۷ اسلاید
    { id: 1, imageUrl: "/image/pic1.png", title: "گوشی نخر، پیشواز تو عوض کن!", description: "گوشی، مچ بند هوشمند و جوایز دیگه", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 2, imageUrl: "/image/pic2.png", title: "بسته‌های اینترنت همراه", description: "متنوع‌ترین بسته‌ها با بهترین قیمت", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 3, imageUrl: "/image/pic3.png", title: "خدمات دیجیتال ایرانسل", description: "دنیایی از سرگرمی و آموزش", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 4, imageUrl: "/image/pic4.png", title: "تجربه سرعت 5G", description: "به شبکه نسل پنجم متصل شوید", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 5, imageUrl: "/image/pic5.png", title: "پشتیبانی همه‌جانبه", description: "تیم ما ۲۴ ساعته آماده پاسخگویی است", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 6, imageUrl: "/image/pic6.png", title: "ایرانسل من، همراه هوشمند شما", description: "مدیریت آسان تمام خدمات ایرانسل", buttonText: "اطلاعات بیشتر", buttonLink: "#"},
    { id: 7, imageUrl: "/image/ریدیزاین-فیبرررررنوری.gif", title: "تحول فیبر نوری ایرانسل", description: "سرعت و پایداری بی‌نظیر", buttonText: "اطلاعات بیشتر", buttonLink: "#"}
];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
    React.useEffect(() => {
        document.documentElement.style.setProperty('--autoplay-delay-ms', `${AUTOPLAY_DELAY}ms`);
    }, []);

    return (
        <div className="hero-slider-container w-full relative bg-gray-100">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true} // دکمه‌های ناوبری فعال هستند
                direction="vertical"
                className="w-full h-[450px] md:h-[550px] lg:h-[calc(100vh-112px)] max-h-[700px]"
                pagination={{
                    el: '.custom-swiper-pagination',
                    clickable: true,
                    bulletClass: 'custom-swiper-bullet',
                    bulletActiveClass: 'custom-swiper-bullet-active',
                    renderBullet: function (index, className) {
                        return `<span class="${className}"><span class="custom-bullet-progress-bar"></span></span>`;
                    }
                }}
                breakpoints={{
                    320: { direction: 'horizontal' },
                    1024: { direction: 'vertical' }
                }}
                onInit={(swiper) => { /* ... کد onInit مثل قبل ... */ }}
                onSlideChangeTransitionEnd={(swiper) => { /* ... کد onSlideChangeTransitionEnd مثل قبل ... */ }}
                onBreakpoint={(swiper, breakpointParams) => { /* ... کد onBreakpoint مثل قبل ... */ }}
            >
                {slidesContent.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="w-full h-full relative overflow-hidden bg-black">
                        <img
                            src={slide.imageUrl}
                            alt={slide.title || `Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => { /* کد onError مثل قبل */ }}
                        />
                        {/* لایه متن و دکمه: چپ‌-وسط */}
                        <div className="absolute inset-0 p-6 md:p-10 lg:p-16 flex flex-col justify-center items-start text-left">
                            <div className="slide-text-content max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg text-gray-100 mb-4 md:mb-6 shadow-md">
                                    {slide.description}
                                </p>
                                {slide.buttonText && slide.buttonLink && (
                                    <a
                                        href={slide.buttonLink}
                                        // دکمه با عرض کامل والد و متن وسط‌چین داخل دکمه
                                        className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black text-center font-semibold py-2.5 sm:py-3 px-6 rounded-full text-sm sm:text-base transition-colors shadow-md hover:shadow-lg mt-4"
                                    >
                                        {slide.buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-pagination"></div>
        </div>
    );
}