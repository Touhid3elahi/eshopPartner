import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'tiny-slider/dist/tiny-slider.css';


const Hero = () => {
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
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    {/* Left Spacer (optional for alignment) */}
                    <div className="col-lg-3 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-12">
                                <div className="hero-small-banner"></div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-12">
                                <div
                                    className="card mb-2"
                                    style={{ height:'100px',width:'300',backgroundImage: 'url(https://placehold.co/300x100?font=roboto)', backgroundSize: 'cover' }}
                                >
                                    広告1
                                </div>
                                <div
                                    className="card mb-2"
                                    style={{ height:'100px',width:'300',backgroundImage: 'url(https://placehold.co/300x100?font=roboto)', backgroundSize: 'cover' }}
                                >
                                    広告2
                                </div>
                                <div
                                    className="card"
                                    style={{ height:'100px',width:'300', backgroundImage: 'url(https://placehold.co/300x100?font=roboto)', backgroundSize: 'cover' }}
                                >
                                    広告3
                                </div>
                            </div>
                        </div>

                    </div>

                {/* Hero Slider Section */}
                <div className="col-lg-6 col-12 px-0">
                    <div className="slider-head">
                        <div className="hero-slider">
                            {/* Single Slider 1 */}
                            <div
                                className="single-slider"
                                style={{
                                    backgroundImage: 'url(https://via.placeholder.com/800x500)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="content text-center p-4">
                                    <h2>
                                        <span>手数料なし（$35お得）</span>
                                        高品質______
                                    </h2>
                                    <p>
                                        最新のデザインと優れた機能を備えた________を今すぐ手に入れましょう。
                                    </p>
                                    <h3>
                                        <span>今だけ</span> $320.99
                                    </h3>
                                    <div className="button">
                                        <Link to="#" className="btn btn-primary">購入する</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Single Slider 2 */}
                            <div
                                className="single-slider"
                                style={{
                                    backgroundImage: 'url(https://via.placeholder.com/800x500)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="content text-center p-4">
                                    <h2>
                                        <span>ビッグセール</span>
                                        防犯_____がお得！
                                    </h2>
                                    <p>
                                        安全を守るための最新の防犯_____セットをこの価格で提供中。
                                    </p>
                                    <h3>
                                        <span>セット価格:</span> $590.00
                                    </h3>
                                    <div className="button">
                                        <Link to="#" className="btn btn-primary">購入する</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Banners Section */}
                <div className="col-lg-3 col-12">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 col-12">
                            {/* Small Banner 1 */}
                            <div
                                className="hero-small-banner"
                                style={{
                                    backgroundImage: "url('https://via.placeholder.com/370x250')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="content text-white p-3">
                                    <h2>
                                        <span></span>
                                        広告掲載場所
                                    </h2>
                                    <h3>$259.99</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-12">
                            {/* Small Banner 2 */}
                            <div
                                className="hero-small-banner style2 bg-primary text-white px-4 rounded"
                            >
                                <h4>毎週のセールオファー！</h4>
                                <p>今週はオンラインストアの全商品が最大 50% オフとなります。</p>
                                <div className="button mt-3">
                                    <Link className="btn btn-light" to="#">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section >
    )
}

export default Hero