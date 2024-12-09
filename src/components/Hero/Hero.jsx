import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tiny-slider/dist/tiny-slider.css';

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
            subCategories: ['サブカテゴリ 1.1', 'サブカテゴリ 1.2', 'サブカテゴリ 1.3'],
        },
        {
            name: 'カテゴリー 2',
            subCategories: ['サブカテゴリ 2.1', 'サブカテゴリ 2.2', 'サブカテゴリ 2.3'],
        },
        { name: 'カテゴリー 3' },
        { name: 'カテゴリー 4' },
        { name: 'カテゴリー 5' },
    ];

    const sliderItems = [
        {
            title: '手数料なし（$35お得）',
            description: '最新のデザインと優れた機能を備えた________を今すぐ手に入れましょう。',
            price: '今だけ $320.99',
            bgImage: 'https://via.placeholder.com/800x500',
        },
        {
            title: 'ビッグセール',
            description: '安全を守るための最新の防犯_____セットをこの価格で提供中。',
            price: 'セット価格: $590.00',
            bgImage: 'https://via.placeholder.com/800x500',
        },
    ];

    const rightBanners = [
        {
            bgImage: 'https://via.placeholder.com/370x250',
            title: '広告掲載場所',
            price: '$259.99',
        },
        {
            bgColor: 'bg-primary',
            textColor: 'text-white',
            content: (
                <>
                    <h4>毎週のセールオファー！</h4>
                    <p>今週はオンラインストアの全商品が最大 50% オフとなります。</p>
                    <div className="button mt-3">
                        <Link className="btn btn-light" to="#">
                            Shop Now
                        </Link>
                    </div>
                </>
            ),
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
                                    className={`hero-small-banner ${banner.bgColor || ''} ${banner.textColor || ''}`}
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
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
