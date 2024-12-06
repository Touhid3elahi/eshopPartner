import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/デンカハブ.png';

const Topbar = () => {

  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-left">
              <ul className="menu-top-link">
                <li>
                  <div className="select-position">
                    <select id="select4">
                      <option value="0" selected>
                        ¥ JPY
                      </option>
                      <option value="1">€ EURO</option>
                      <option value="2">$ CAD</option>
                      <option value="3">₹ INR</option>
                      <option value="4">¥ CNY</option>
                      <option value="5">৳ BDT</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="select-position">
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-middle">
              <ul className="useful-links">
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>
                  <Link to="about-us.html">DenkiShopにすいて</Link>
                </li>
                <li>
                  <Link to="/product-grid">製品リスト</Link>
                </li>

                <li>
                  <Link to="contact.html">店舗案内</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-end">
              <div className="user">
                <i className="lni lni-user"></i> Hello
              </div>
              <ul className="user-login">
                <li>
                  <Link to="login.html">ログイン</Link>
                </li>
                <li>
                  <Link to="register.html">登録する</Link>
                </li>
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
                      <option value="1">Option 01</option>
                      <option value="2">Option 02</option>
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
                  ホットライン: <span>(+100) 123 456 7890</span>
                </h3>
              </div>
              <div className="navbar-cart">
                <div className="wishlist">
                  <Link to="#">
                    <i className="lni lni-heart"></i>
                    <span className="total-items">0</span>
                  </Link>
                </div>
                <div className="cart-items">
                  <Link to="#" className="main-btn">
                    <i className="lni lni-cart"></i>
                    <span className="total-items">2</span>
                  </Link>
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <Link to="cart.html">View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <Link to="#" className="remove" title="Remove this item">
                          <i className="lni lni-close"></i>
                        </Link>
                        <div className="cart-img-head">
                          <Link className="cart-img" to="product-details.html">
                            <img
                              src="assets/images/header/cart-items/item1.jpg"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link to="product-details.html">
                              Apple Watch Series 6
                            </Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$99.00</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <Link to="#" className="remove" title="Remove this item">
                          <i className="lni lni-close"></i>
                        </Link>
                        <div className="cart-img-head">
                          <Link className="cart-img" href="product-details.html">
                            <img
                              src="assets/images/header/cart-items/item2.jpg"
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link to="product-details.html">Wi-Fi Smart Camera</Link>
                          </h4>
                          <p className="quantity">
                            1x - <span className="amount">$35.00</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
                      <div className="button">
                        <Link to="checkout.html" className="btn animate">
                          Checkout
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
  const [isExpanded, setIsExpanded] = useState(true); // Set to true to expand by default

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 col-md-6 col-12">
          <div className="nav-inner">
            <div className="mega-category-menu">
              <span
                className="cat-button"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <i className="lni lni-menu"></i>全てのカテゴリー
              </span>
              <ul
                className={`sub-category ${isExpanded ? 'expanded' : 'collapsed'
                  }`}
              >
                <li>
                  <Link to="product-grids.html">
                    カテゴリー 1 <i className="lni lni-chevron-right"></i>
                  </Link>
                  <ul className="inner-sub-category">
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.1</Link>
                    </li>
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.2</Link>
                    </li>
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="product-grids.html">カテゴリー 2</Link>
                  <ul className="inner-sub-category">
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.1</Link>
                    </li>
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.2</Link>
                    </li>
                    <li>
                      <Link to="product-grids.html">サブカテゴリ 1.3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="product-grids.html">カテゴリー 3</Link>
                </li>
                <li>
                  <Link to="product-grids.html">カテゴリー 4</Link>
                </li>
                <li>
                  <Link to="product-grids.html">カテゴリー 5</Link>
                </li>
              </ul>
            </div>
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
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about-us.html">DenkiShopにすいて</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product-grid">製品リスト</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact.html">店舗案内</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="nav-social">
            <h5 className="title">Follow Us:</h5>
            <ul>
              <li>
                <Link to="#">
                  <i className="lni lni-facebook-filled"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="lni lni-twitter-original"></i>
                </Link>
              </li>
            </ul>
          </div>
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
