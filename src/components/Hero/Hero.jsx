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
                    <div className="col-lg-3 col-12"></div>
                    {/* Hero Slider Section */}
                    <div className="col-lg-6 col-12 px-0">
                        <div className="slider-head">
                            {/* Hero Slider */}
                            <div className="hero-slider">
                                {/* Single Slider */}
                                <div
                                    className="single-slider"
                                    style={{ backgroundImage: 'url(https://via.placeholder.com/800x500)' }}
                                >
                                    <div className="content">
                                        <h2>
                                            <span>No restocking fee ($35 savings)</span>
                                            M75 Sport Watch
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                            incididunt ut labore dolore magna aliqua.
                                        </p>
                                        <h3>
                                            <span>Now Only</span> $320.99
                                        </h3>
                                        <div className="button">
                                            <Link to="#" className="btn">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Slider */}
                                {/* Single Slider */}
                                <div
                                    className="single-slider"
                                    style={{ backgroundImage: 'url(https://via.placeholder.com/800x500)' }}
                                >
                                    <div className="content">
                                        <h2>
                                            <span>Big Sale Offer</span>
                                            Get the Best Deal on CCTV Camera
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                            incididunt ut labore dolore magna aliqua.
                                        </p>
                                        <h3>
                                            <span>Combo Only:</span> $590.00
                                        </h3>
                                        <div className="button">
                                            <Link to="#" className="btn">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Slider */}
                            </div>
                            {/* End Hero Slider */}
                        </div>
                    </div>
                    {/* End Hero Slider Section */}

                    {/* Right Banners Section */}
                    <div className="col-lg-3 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                {/* Small Banner */}
                                <div
                                    className="hero-small-banner"
                                    style={{ backgroundImage: "url('https://via.placeholder.com/370x250')" }}
                                >
                                    <div className="content">
                                        <h2>
                                            <span>New line required</span>
                                            iPhone 12 Pro Max
                                        </h2>
                                        <h3>$259.99</h3>
                                    </div>
                                </div>
                                {/* End Small Banner */}
                            </div>
                            <div className="col-lg-12 col-md-6 col-12">
                                {/* Small Banner */}
                                <div className="hero-small-banner style2">
                                    <div className="content">
                                        <h2>Weekly Sale!</h2>
                                        <p>Saving up to 50% off all online store items this week.</p>
                                        <div className="button">
                                            <Link className="btn" to="#">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Small Banner */}
                            </div>
                        </div>
                    </div>
                    {/* End Right Banners Section */}
                </div>
            </div>
        </section>
    )
}

export default Hero