import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tiny-slider/dist/tiny-slider.css';
import hero1 from '../../assets/images/hero/HERO2.png';
import hero2 from '../../assets/images/hero/HERO3.png';
import ad1 from '../../assets/images/hero/ADS.png';
import BusinessDayCalendar from "../../components/weekday/BusinessDayCalendar "
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [searchCode, setSearchCode] = useState("");

    useEffect(() => {
        const tns = require('tiny-slider').tns;
        tns({
            container: '.hero-slider',
            slideBy: 'page',
            autoplay: false,
            autoplayTimeout: 5000, // Set autoplay delay to 5000ms (5 seconds)
            speed: 1000, // Set transition speed to 1000ms (1 second)
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

    const manufacturers = [
        { name: 'メーカー 1' },
        { name: 'メーカー 2' },
        { name: 'メーカー 3' },
        { name: 'メーカー 4' },
        { name: 'メーカー 5' },
    ];



    const sliderItems = [
      {
      title: "おすすめ商品",
      description: "・商品名\n・値段\n・商品概要", // Line breaks
      price: "値段",
      bgImage: hero1,
    },
    {
      title: "セール品画像",
      description: "・商品名\n・値段\n・商品概要", // Line breaks
      price: "値段",
      bgImage: hero2,
    },
    ];

    const usageScenes = [
        { name: '利用シーン1' },
        { name: '利用シーン2' },
        { name: '利用シーン3' },
        { name: '利用シーン4' },
        { name: '利用シーン5' },
    ];

    const rightBanners = [
        {
            title: 'おすすめ商品画像',
            description: '',
            bgImage: hero1,
        },
        {
            title: 'おすすめ商品画像',
            description: '',
            bgColor: '#007bff',
            bgImage: hero2,
        },
    ];

    const smallBanners = [
        { text: '広告1', bgImage: ad1 },
        { text: '広告2', bgImage: ad1 },
        { text: '広告3', bgImage: ad1 },
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
                            <span
                                className="cat-button mt-3"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                🏭 メーカーから探す
                            </span>
                            <ul className={`sub-category ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                {manufacturers.map((manufacturer, index) => (
                                    <li key={index}>
                                        <Link to="product-grids.html">
                                            <i className="lni lni-chevron-right"></i> {manufacturer.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="usage-scenes-menu">
                                {/* Button to toggle menu */}
                                <span
                                    className="cat-button mt-3"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    style={{ cursor: 'pointer', display: 'block', fontSize: '16px' }}
                                >
                                    🗂 利用シーンから探す
                                </span>

                                {/* List of Usage Scenes */}
                                <ul className={`sub-category ${isExpanded ? 'expanded' : 'collapsed'}`} style={{ marginTop: '10px' }}>
                                    {usageScenes.map((scene, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>
                                            <Link to="product-grids.html" style={{ textDecoration: 'none', color: '#333' }}>
                                                ➡ {scene.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="search-by-code my-3">
                                <input
                                    type="text"
                                    placeholder="直接注文(商品番号)"
                                    value={searchCode}
                                    onChange={(e) => setSearchCode(e.target.value)}
                                    className="form-control"
                                />
                            </div>
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
                            <BusinessDayCalendar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
