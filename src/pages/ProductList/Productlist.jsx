import React from "react";

const Productlist = () => {
    return (
        <section className="product-grids section">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 col-12">
                        <div className="product-sidebar">
                            {/* Search Widget */}
                            <div className="single-widget search">
                                <h3>Search Product</h3>
                                <form action="#">
                                    <input type="text" placeholder="Search Here..." />
                                    <button type="submit">
                                        <i className="lni lni-search-alt"></i>
                                    </button>
                                </form>
                            </div>
                            {/* Categories Widget */}
                            <div className="single-widget">
                                <h3>All Categories</h3>
                                <ul className="list">
                                    <li>
                                        <a href="product-grids.html">Computers & Accessories </a>
                                        <span>(1138)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">Smartphones & Tablets</a>
                                        <span>(2356)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">TV, Video & Audio</a>
                                        <span>(420)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">Cameras, Photo & Video</a>
                                        <span>(874)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">Headphones</a>
                                        <span>(1239)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">Wearable Electronics</a>
                                        <span>(340)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">Printers & Ink</a>
                                        <span>(512)</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Price Range Widget */}
                            <div className="single-widget range">
                                <h3>価格帯</h3>
                                <input
                                    type="range"
                                    className="form-range"
                                    name="range"
                                    step="1"
                                    min="100"
                                    max="10000"
                                    defaultValue="10"
                                    onChange={(e) => (document.getElementById("rangePrimary").value = e.target.value)}
                                />
                                <div className="range-inner">
                                    <label>$</label>
                                    <input type="text" id="rangePrimary" placeholder="100" />
                                </div>
                            </div>
                            {/* Filter by Price Widget */}
                            <div className="single-widget condition">
                                <h3>価格で絞り込む</h3>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        $50 - $100 (208)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                                        $100 - $500 (311)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                        $500 - $1,000 (485)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                                        $1,000 - $5,000 (213)
                                    </label>
                                </div>
                            </div>
                            {/* Filter by Brand Widget */}
                            <div className="single-widget condition">
                                <h3>ブランドで絞り込む</h3>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault11" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault11">
                                        Apple (254)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault22" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault22">
                                        Bosh (39)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault33" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault33">
                                        Canon Inc. (128)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Grids */}
                    <div className="col-lg-9 col-12">
                        <div className="product-grids-head">
                            <div className="product-grid-topbar">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <div className="product-sorting">
                                            <label htmlFor="sorting">Sort by:</label>
                                            <select className="form-control" id="sorting">
                                                <option>Popularity</option>
                                                <option>Low - High Price</option>
                                                <option>High - Low Price</option>
                                                <option>Average Rating</option>
                                                <option>A - Z Order</option>
                                                <option>Z - A Order</option>
                                            </select>
                                            <h3 className="total-show-product">
                                                Showing: <span>1 - 12 items</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid" role="tabpanel">
                                    <div className="row">
                                        {/* Product Items */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="#" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Watches</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled"></i>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$199.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 2" />
                                                    <span className="sale-tag">-25%</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Speakers</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Bluetooth Speaker</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$275.00</span>
                                                        <span className="discount-price">$300.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 3 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 3" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Cameras</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">WiFi Security Camera</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$399.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 4 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 4" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Phones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">iPhone 6X Plus</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$400.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 5 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 5" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Headphones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Wireless Headphones</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$350.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 6 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 6" />
                                                    <span className="sale-tag">-50%</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Speakers</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Mini Bluetooth Speaker</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$70.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 7 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 7" />
                                                    <span className="new-tag">New</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Laptops</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Apple MacBook Air</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$899.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 8 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 8" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Headphones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">PX7 Wireless Headphones</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$100.00</span>
                                                        <span className="discount-price">$200.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product 9 */}
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="https://via.placeholder.com/335x335" alt="Product 9" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart"></i> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Cameras</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Digital DSLR Camera</a>
                                                    </h4>
                                                    <div className="price">
                                                        <span>$500.00</span>
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
            </div>
        </section>
    );
};

export default Productlist;
