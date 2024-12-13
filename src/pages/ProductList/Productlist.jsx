import React , {useState} from "react";

const Productlist = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12); // ページごとのアイテム数
  const [totalItems] = useState(50); // 合計アイテム数（動的に設定可能）
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ番号

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
    return (
        <section className="product-grids section">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 col-12">
                        <div className="product-sidebar">
                            {/* Search Widget */}
                            <div className="single-widget search">
                                <h3>商品を検索</h3>
                                <form action="#">
                                    <input type="text" placeholder="ここで検索してください" />
                                    <button type="submit">
                                        <i className="lni lni-search-alt"></i>
                                    </button>
                                </form>
                            </div>
                            {/* Categories Widget */}
                            <div className="single-widget">
                                <h3>全てのカテゴリー</h3>
                                <ul className="list">
                                    <li>
                                        <a href="product-grids.html">カテゴリー1</a>
                                        <span>(1138)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">カテゴリー2</a>
                                        <span>(2356)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">カテゴリー</a>
                                        <span>(420)</span>
                                    </li>
                                    <li>
                                        <a href="product-grids.html">カテゴリー</a>
                                        <span>(874)</span>
                                    </li>
                                </ul>
                            </div>
                           
                           
                            {/* Filter by Brand Widget */}
                            <div className="single-widget condition">
                                <h3>メーカー絞り込む</h3>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault11" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault11">
                                        Makita (254)
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
                                            <label htmlFor="sorting">並べ替え</label>
                                            <select className="form-control" id="sorting">
                                            <option>人気順</option>
                                            <option>価格が低い順</option>
                                            <option>価格が高い順</option>
                                                <option>Average Rating</option>
                                                <option>A - Z Order</option>
                                                <option>Z - A Order</option>
                                            </select>
                                            <h3 className="total-show-product">
                                            表示中: <span>{startIndex} - {endIndex} 件</span>
                                            （全{totalItems}件中）                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid" role="tabpanel">
                                    <div className="row">
                                        {/* Product Items */}
                                        {Array.from({ length: 9 }).map((_, index) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img
                                                            src="https://via.placeholder.com/335x335"
                                                            alt={`Product {index + 1}円`}
                                                        />
                                                        {index % 2 === 0 ? <span className="sale-tag">-20%</span> : null}
                                                        <div className="button">
                                                            <a href="product-details.html" className="btn">
                                                                <i className="lni lni-cart"></i> Add to Cart
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">カテゴリプレースホルダー</span>
                                                        <h4 className="title">
                                                            <a href="product-grids.html">商品名</a>
                                                        </h4>
                                                        <div className="price">
                                                            <span>199.00円</span>
                                                            {index % 2 === 0 ? (
                                                                <span className="discount-price">250.00円</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
