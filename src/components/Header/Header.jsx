import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/デンカハブ.gif';
import NotificationIcon from '../Notification';
import product1 from '../../assets/images/product/product1.webp';
import product2 from "../../assets/images/product/product2.webp";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="top-left">
              <ul className="menu-top-link">
                <li>
                  {/* <div className="select-position">
                    <select id="select4">
                      <option value="0" selected>
                        ¥ JPY
                      </option>
                      <option value="1">€ EURO</option>
                      <option value="2">円 CAD</option>
                      <option value="3">₹ INR</option>
                      <option value="4">¥ CNY</option>
                      <option value="5">৳ BDT</option>
                    </select>
                  </div> */}
                </li>
                <li>
                  {/* <div className="select-position">
                    <select id="select5">
                      <option value="0" selected>
                        日本語1
                      </option>
                      <option value="1">
                        English
                      </option>
                      <option value="2">Español</option>
                      <option value="3">Français</option>
                      <option value="4">العربية</option>
                      <option value="5">বাংলা</option>
                    </select>
                  </div> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="top-middle">
              <ul className="useful-links">
                <li>
                  <Link to="index.html">ホーム</Link>
                </li>
                {/* <li>
                  <Link to="about-us.html">私たちについて</Link>
                </li> */}
                <li>
                  <Link to="/product-grid">商品リスト</Link>
                </li>

                {/* <li>
                  <Link to="contact.html">お問い合わせ</Link>
                </li>
                <li>
                  <Link to="contact.html">ご利用ガイド</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="top-end">

              <div className="user mx-2">
                <NotificationIcon />
              </div>
              <div className="user">
                <i className="lni lni-user"></i> Hello
              </div>
              <ul className="user-login">
                <li>
                  <Link to="/login">ログイン</Link>
                </li>
                {/* <li>
                  <Link to="/registration">登録する</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-7">
            <Link className="navbar-brand" to="index.html">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-lg-5 col-md-7 d-xs-none">
            <div className="main-menu-search">
              <div className="navbar-search search-style-5">
                <div className="search-select">
                  <div className="select-position">
                    <select id="select1">
                      <option selected>全て</option>
                      <option value="1">カテゴリー 1</option>
                      <option value="2">カテゴリー 2</option>
                    </select>
                  </div>
                </div>
                <div className="search-input">
                  <input type="text" placeholder="検索" />
                </div>
                <div className="search-btn">
                  <button>
                    <i className="lni lni-search-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-5">
            <div className="middle-right-area">
              <div className="nav-hotline">
                <i className="lni lni-phone"></i>
                <h3>
                  TEL: <span>080 XXXX XXXX</span>
                </h3>
              </div>
              <div className="navbar-cart">
                <div className="wishlist">
                  <a href={product1}>
                    <i className="lni lni-heart"></i>
                    <span className="total-items">2</span> {/* Updated to 2 */}
                  </a>

                </div>
                <div className="cart-items">
                  <Link to="#" className="main-btn">
                    <i className="lni lni-cart"></i>
                    <span className="total-items">2</span>
                  </Link>
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 項目</span>
                      <Link to="/cart">カートを見る</Link>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <Link to="#" className="remove" title="Remove this item">
                          <i className="lni lni-close"></i>
                        </Link>
                        <div className="cart-img-head">
                          <Link className="cart-img" to="product-details.html">
                          <img src={product1} alt="商品1" />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link to="product-details.html">
                              商品ー１
                            </Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">15,000円</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <Link to="#" className="remove" title="Remove this item">
                          <i className="lni lni-close"></i>
                        </Link>
                        <div className="cart-img-head">
                          <Link className="cart-img" href="product-details.html">
                          <img src={product2} alt="商品2" />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link to="product-details.html">商品ー２</Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">12,000円</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>合計</span>
                        <span className="total-amount">134円</span>
                      </div>
                      <div className="button">
                        <Link to="/checkout" className="btn animate">
                          購入手続き
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderBottom = () => {
  // Set to true to expand by default

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 col-md-6 col-12">
          <div className="nav-inner">

            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="index.html" className="active">
                      ホーム
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="about-us.html">私たちについて</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/product-grid">商品リスト</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="contact.html">お問い合わせ</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact.html">ご利用ガイド</Link>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          
        </div>
      </div>
    </div>

  );
};

const Header = () => {
  return (
    <header className="header navbar-area">
      <Topbar />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default Header;
