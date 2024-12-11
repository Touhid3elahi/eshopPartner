import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/デンカハブ.gif';
import credit from '../../assets/images/footer/credit-cards-footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Start Footer Top */}
            
            {/* End Footer Top */}

            {/* Start Footer Middle */}
            <div className="footer-middle1">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="row">
                            {/* Contact Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-contact">
                                    <nav>
                                        <h3>マイページ</h3>
                                        <ul class="myp">
                                            <li>お気に入り</li>
                                            <li>ご注文履歴</li>
                                            <li>見積りリスト</li>
                                            <li>登録情報の変更</li>
                                            <li>お届け先住所の変更
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* product Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div class="single-footer f-contact">
                                    <nav>
                                        <h3>商品を探す</h3>
                                        <ul>
                                            <li>商品カテゴリーから探す
                                                <ul>
                                                    <li>カテゴリー1</li>
                                                    <li>カテゴリー2</li>

                                                </ul>
                                            </li>
                                            <li><a href="">メーカーから探す</a></li>
                                            <li><a href="">商品一覧</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* Information Section */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h3>滋賀特機について</h3>
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
                                    <h3>おすすめカテゴリ
                                    </h3>
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
                        <div className="row d-flex justify-content-center m-5">
                            {/* Footer Logo */}
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className="footer-logo">
                                    <Link to="#">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12">
                           <p>〒大津市におの浜4丁目1-25</p> 
                           <p>TEL: (077)xxx xxxx(代)</p> 
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


                            </div>
                            {/* Copyright Section */}
                            <div className="col-lg-4 col-12">
                                <div className="copyright">
                                    <p>
                                        © 2024 <Link to="#" rel="nofollow" target="_blank"></Link>
                                        、デザインおよび開発
                                    </p>
                                </div>
                            </div>
                            {/* Social Media Section */}
                            <div className="col-lg-4 col-12">

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