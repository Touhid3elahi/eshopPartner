import React from "react";
import product1 from '../assets/images/product/product1.webp';
import product2 from '../assets/images/product/product2.webp';
import product3 from '../assets/images/product/product3.webp';

const TrendingProduct = () => {
  // Product data in Japanese
  const products = [
    {
      id: 1,
      image: product1,
      category: "カテゴリー1", // Category 1 in Japanese
      title: "タイトル1", // Title 1 in Japanese
      price: "19,800円", // Example price in Japanese yen
      reviews: 4.0,
      reviewCount: 4,
      discount: null,
      isNew: false,
    },
    {
      id: 2,
      image: product2,
      category: "カテゴリー2", // Speaker in Japanese
      title: "タイトル2", // Big Power Sound Speaker
      price: "27,500800円",
      originalPrice: "30,000800円",
      reviews: 5.0,
      reviewCount: 5,
      discount: "-25%",
      isNew: false,
    },
    {
      id: 3,
      image: product3,
      category: "カテゴリー3", // Camera in Japanese
      title: "タイトル3", // WiFi Security Camera
      price: "39,900800円",
      reviews: 5.0,
      reviewCount: 5,
      discount: null,
      isNew: false,
    },
    {
      id: 4,
      image: product1,
      category: "カテゴリー4", // Smartphone in Japanese
      title: "タイトル4", // Same name as in English
      price: "40,000800円",
      reviews: 5.0,
      reviewCount: 5,
      discount: null,
      isNew: true,
    },
   
  ];

  return (
    <section className="trending-product">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>おすすめ商品</h2> {/* Trending Product in Japanese */}
              <p>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-12" key={product.id}>
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.discount && <span className="sale-tag">{product.discount}</span>}
                  {product.isNew && <span className="new-tag">新着</span>} {/* New in Japanese */}
                  <div className="button">
                    <a href="product-details.html" className="btn">
                      <i className="lni lni-cart"></i> カートに追加 {/* Add to Cart in Japanese */}
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">{product.category}</span>
                  <h4 className="title">
                    <a href="product-grids.html">{product.title}</a>
                  </h4>
                  <ul className="review">
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <i
                          className={`lni ${
                            index < product.reviews ? "lni-star-filled" : "lni-star"
                          }`}
                        ></i>
                      </li>
                    ))}
                    <li>
                      <span>{product.reviews.toFixed(1)} レビュー</span> {/* Review in Japanese */}
                    </li>
                  </ul>
                  <div className="price">
                    <span>{product.price}</span>
                    {product.originalPrice && (
                      <span className="discount-price">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
