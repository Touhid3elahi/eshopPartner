import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tiny-slider/dist/tiny-slider.css';
import BusinessDayCalendar from "../../components/weekday/BusinessDayCalendar "
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const tns = require('tiny-slider').tns;
        tns({
            container: '.hero-slider',
            slideBy: 'page',
            autoplay: true,
            autoplayButtonOutput: false,
            mouseDrag: true,
            gutter: 0,
            items: 1,
            nav: false,
            controls: true,
            controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
        });
    }, []);

    // Categories and banners for dynamic rendering
    const categories = [
        {
            name: 'カテゴリー 1',
            subCategories: ['サブカテゴリ 1', 'サブカテゴリ 2', 'サブカテゴリ 3'],
        },
        {
            name: 'カテゴリー 2',
            subCategories: ['サブカテゴリ 1', 'サブカテゴリ 2', 'サブカテゴリ 3'],
        },
        { name: 'カテゴリー 3' },
        { name: 'カテゴリー 4' },
        { name: 'カテゴリー 5' },
    ];

    

    const sliderItems = [
        {
            title: 'おすすめ商品画像',
            description: '記載内容\n・商品名\n・値段\n・商品概要',
            price: '値段',
            bgImage: 'https://via.placeholder.com/800x500',
        },
    ];

    const rightBanners = [
        {
            title: 'おすすめ商品画像',
            description: '記載内容\n・商品名\n・値段\n・商品概要',
            bgImage: 'https://via.placeholder.com/370x250',
        },
        {
            title: '宣伝文',
            description: '例）週末セール20%OFF',
            bgColor: '#007bff',
            bgImage: 'https://via.placeholder.com/370x250',
        },
    ];

    const smallBanners = [
        { text: '広告1', bgImage: 'https://placehold.co/300x100?font=roboto' },
        { text: '広告2', bgImage: 'https://placehold.co/300x100?font=roboto' },
        { text: '広告3', bgImage: 'https://placehold.co/300x100?font=roboto' },
    ];

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    {/* Left Category Section */}
                    <div className="col-lg-3 col-12">
                        <div className="mega-category-menu">
                            <span
                                className="cat-button"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <i className="lni lni-menu"></i> 全てのカテゴリー
                            </span>
                            <ul className={`sub-category ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <Link to="product-grids.html">
                                            {category.name} {category.subCategories && <i className="lni lni-chevron-right"></i>}
                                        </Link>
                                        {category.subCategories && (
                                            <ul className="inner-sub-category">
                                                {category.subCategories.map((subCat, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to="product-grids.html">{subCat}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mega-category-menu">
                            <span
                                className="cat-button"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <i className="lni lni-menu"></i> メーカーから探す
                            </span>
                            <ul className={`sub-category ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <Link to="product-grids.html">
                                            {category.name} {category.subCategories && <i className="lni lni-chevron-right"></i>}
                                        </Link>
                                        {category.subCategories && (
                                            <ul className="inner-sub-category">
                                                {category.subCategories.map((subCat, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to="product-grids.html">{subCat}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {smallBanners.map((banner, index) => (
                            <div
                                key={index}
                                className="card mb-2"
                                style={{
                                    height: '100px',
                                    width: '100%',
                                    backgroundImage: `url(${banner.bgImage})`,
                                    backgroundSize: 'cover',
                                }}
                            >
                                {banner.text}
                            </div>
                        ))}
                    </div>

                    {/* Hero Slider Section */}
                    <div className="col-lg-6 col-12 pe-2">
                        <div className="slider-head">
                            <div className="hero-slider">
                                {sliderItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="single-slider"
                                        style={{
                                            backgroundImage: `url(${item.bgImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="content text-center p-4">
                                            <h2>
                                                <span>{item.title}</span>
                                            </h2>
                                            <p>{item.description}</p>
                                            <h3>{item.price}</h3>
                                            <div className="button">
                                                <Link to="#" className="btn btn-primary">
                                                    購入する
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Banners Section */}
                    <div className="col-lg-3 col-12">
                        <div className="row">
                            {rightBanners.map((banner, index) => (
                                <div
                                    key={index}
                                    className={`hero-small-banner m-2 ${banner.bgColor || ''} ${banner.textColor || ''}`}
                                    style={{
                                        backgroundImage: banner.bgImage
                                            ? `url(${banner.bgImage})`
                                            : undefined,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        padding: '20px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    {banner.content || (
                                        <div className="content text-white">
                                            <h2>{banner.title}</h2>
                                            <h3>{banner.price}</h3>
                                            <h3>{banner.description}</h3>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <BusinessDayCalendar/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
