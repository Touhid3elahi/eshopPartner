import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/デンカハブ.png';
import credit from '../../assets/images/footer/credit-cards-footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Start Footer Top */}
            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            {/* Footer Logo */}
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className="footer-logo">
                                    <Link to="#">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            {/* Newsletter Section */}
                            <div className="col-lg-9 col-md-8 col-12">
                                <div className="footer-newsletter">
                                    <h4 className="title">
                                        ニュースレターを購読する
                                        <span>最新情報、セール、特別オファーをお届けします。</span>
                                    </h4>
                                    <div className="newsletter-form-head">
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input
                                                name="EMAIL"
                                                placeholder="メールアドレスを入力してください..."
                                                type="email"
                                                required
                                            />
                                            <div className="button">
                                                <button className="btn">
                                                    購読する<span className="dir-part"></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Top */}

            {/* Start Footer Middle */}
            <div className="footer-middle">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="row">
                            {/* Contact Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-contact">
                                    <h3>お問い合わせ</h3>
                                    <p className="phone">☎: +1 (900) 33 169 7720</p>
                                    <ul>
                                        <li><span>月曜日-金曜日: </span> 9.00 午後 - 8.00 午前</li>
                                        <li><span>土曜日: </span> 10.00 am - 6.00 pm</li>
                                    </ul>
                                    <p className="mail">
                                        <Link to="#">support@DenkiHub.com</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Mobile App Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer our-app">
                                    <h3>モバイルアプリ</h3>
                                    <ul className="app-btn">
                                        <li>
                                            <Link to="#">
                                                <i className="lni lni-apple"></i>
                                                <span className="small-title">App Storeで</span>
                                                <span className="big-title">ダウンロード</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="lni lni-play-store"></i>
                                                <span className="small-title">Google Playで</span>
                                                <span className="big-title">ダウンロード</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Information Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h3>情報</h3>
                                    <ul>
                                        <li><Link to="#">私たちについて</Link></li>
                                        <li><Link to="#">お問い合わせ</Link></li>
                                        <li><Link to="#">ダウンロード</Link></li>
                                        <li><Link to="#">サイトマップ</Link></li>
                                        <li><Link to="#">よくある質問</Link></li>

                                    </ul>
                                </div>
                            </div>
                            {/* Shop Departments Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h3>部門</h3>
                                    <ul>
                                        <li><Link to="#">カテゴリー1</Link></li>
                                        <li><Link to="#">カテゴリー2</Link></li>
                                        <li><Link to="#">カテゴリー3</Link></li>
                                        <li><Link to="#">カテゴリー5</Link></li>
                                        <li><Link to="#">カテゴリー6</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Middle */}

            {/* Start Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center">
                            {/* Payment Section */}
                            <div className="col-lg-4 col-12">
                                <div className="payment-gateway">
                                    <span>お支払い方法:</span>
                                    <img src={credit} alt="お支払い方法" />
                                </div>

                            </div>
                            {/* Copyright Section */}
                            <div className="col-lg-4 col-12">
                                <div className="copyright">
                                    <p>
                                        © 2024 <Link to="#" rel="nofollow" target="_blank">go-Partner</Link>
                                        、デザインおよび開発
                                    </p>
                                </div>
                            </div>
                            {/* Social Media Section */}
                            <div className="col-lg-4 col-12">
                                <ul className="socila">
                                    <li><span>フォローしてください:</span></li>
                                    <li><Link to="#"><i className="lni lni-facebook-filled"></i></Link></li>
                                    <li><Link to="#"><i className="lni lni-twitter-original"></i></Link></li>
                                    <li><Link to="#"><i className="lni lni-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="lni lni-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Bottom */}
        </footer>
    )
}

export default Footer