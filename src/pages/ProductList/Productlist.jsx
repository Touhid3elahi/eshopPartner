import React, { useState } from "react";
import hammerImg from "../../assets/images/product/claw hammer.webp";
import sawImg from "../../assets/images/product/electric circular saw.webp";
import grinderImg from "../../assets/images/product/grinder.webp";
import pliersImg from "../../assets/images/product/pliers.webp";
import product1Img from "../../assets/images/product/product1.webp";
import product2Img from "../../assets/images/product/product2.webp";
import product3Img from "../../assets/images/product/product3.webp";
import tapeMeasureImg from "../../assets/images/product/retractable tape measure.webp";
import wrenchImg from "../../assets/images/product/wrench.webp";

const Productlist = () => {
  const [itemsPerPage] = useState(9); // ページごとのアイテム数
  const [totalItems] = useState(50); // 合計アイテム数（動的に設定可能）
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ番号

  const products = [
    {
      imgSrc: hammerImg,
      name: "クロー ハンマー",
      category: "工具",
      price: 2500,
      discount: 0,
    },
    {
      imgSrc: sawImg,
      name: "電動丸鋸",
      category: "電動工具",
      price: 15000,
      discount: 1000,
    },
    {
      imgSrc: grinderImg,
      name: "グラインダー",
      category: "電動工具",
      price: 12000,
      discount: 500,
    },
    {
      imgSrc: pliersImg,
      name: "ペンチ",
      category: "ハンドツール",
      price: 3000,
      discount: 0,
    },
    {
      imgSrc: product1Img,
      name: "コンパクト電動ノコギリ",
      category: "電動工具",
      price: 15000,
      discount: 0,
    },
    {
      imgSrc: product2Img,
      name: "コードレスドリル",
      category: "DIY用品",
      price: 12000,
      discount: 500,
    },
    {
      imgSrc: product3Img,
      name: "ハンドヘルド電動サンダー",
      category: "作業機器",
      price: 8000,
      discount: 300,
    },
    {
      imgSrc: tapeMeasureImg,
      name: "巻き尺",
      category: "測定ツール",
      price: 1500,
      discount: 0,
    },
    {
      imgSrc: wrenchImg,
      name: "調整可能レンチ",
      category: "工具",
      price: 3500,
      discount: 0,
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <section className="product-grids section">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-12">
            <div className="product-sidebar">
              <div className="single-widget search">
                <h3>商品を検索</h3>
                <form action="#">
                  <input type="text" placeholder="ここで検索してください" />
                  <button type="submit">
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div className="single-widget">
                <h3>全てのカテゴリー</h3>
                <ul className="list">
                  <li>
                    <a href="product-grids.html">工具</a>
                    <span>(500)</span>
                  </li>
                  <li>
                    <a href="product-grids.html">電動工具</a>
                    <span>(450)</span>
                  </li>
                  <li>
                    <a href="product-grids.html">DIY用品</a>
                    <span>(300)</span>
                  </li>
                  <li>
                    <a href="product-grids.html">測定ツール</a>
                    <span>(150)</span>
                  </li>
                </ul>
              </div>
              <div className="single-widget condition">
                <h3>メーカー絞り込む</h3>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="brand1"
                  />
                  <label className="form-check-label" htmlFor="brand1">
                    Makita (254)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="brand2"
                  />
                  <label className="form-check-label" htmlFor="brand2">
                    Bosch (198)
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
                      </select>
                      <h3 className="total-show-product">
                        表示中: <span>{startIndex} - {endIndex} 件</span>
                        （全{totalItems}件中）
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-grid"
                  role="tabpanel"
                >
                  <div className="row">
                    {products.map((product, index) => (
                      <div className="col-lg-4 col-md-6 col-12" key={index}>
                        <div className="single-product">
                          <div className="product-image">
                            <img src={product.imgSrc} alt={product.name} />
                            {product.discount > 0 && (
                              <span className="sale-tag">
                                -{((product.discount / product.price) * 100).toFixed(0)}%
                              </span>
                            )}
                            <div className="button">
                              <a href="product-details.html" className="btn">
                                <i className="lni lni-cart"></i> カートに追加
                              </a>
                            </div>
                          </div>
                          <div className="product-info">
                            <span className="category">{product.category}</span>
                            <h4 className="title">
                              <a href="product-details.html">{product.name}</a>
                            </h4>
                            <div className="price">
                              <span>{product.price.toLocaleString("ja-JP")}円</span>
                              {product.discount > 0 && (
                                <span className="discount-price">
                                  {(product.price + product.discount).toLocaleString("ja-JP")}円
                                </span>
                              )}
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
