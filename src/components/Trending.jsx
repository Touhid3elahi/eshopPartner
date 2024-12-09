import React from "react";

const TrendingProduct = () => {
  // Product data in Japanese
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/335x335",
      category: "カテゴリー1", // Category 1 in Japanese
      title: "タイトル1", // Title 1 in Japanese
      price: "¥19,800", // Example price in Japanese yen
      reviews: 4.0,
      reviewCount: 4,
      discount: null,
      isNew: false,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/335x335",
      category: "カテゴリー2", // Speaker in Japanese
      title: "タイトル2", // Big Power Sound Speaker
      price: "¥27,500",
      originalPrice: "¥30,000",
      reviews: 5.0,
      reviewCount: 5,
      discount: "-25%",
      isNew: false,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/335x335",
      category: "カテゴリー3", // Camera in Japanese
      title: "タイトル3", // WiFi Security Camera
      price: "¥39,900",
      reviews: 5.0,
      reviewCount: 5,
      discount: null,
      isNew: false,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/335x335",
      category: "カテゴリー4", // Smartphone in Japanese
      title: "タイトル4", // Same name as in English
      price: "¥40,000",
      reviews: 5.0,
      reviewCount: 5,
      discount: null,
      isNew: true,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/335x335",
      category: "カテゴリー5", // Headphones in Japanese
      title: "タイトル5", // Wireless Headphones
      price: "¥35,000",
      reviews: 5.0,
      reviewCount: 5,
      discount: null,
      isNew: false,
    },
  ];

  return (
    <section className="trending-product section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>トレンド商品</h2> {/* Trending Product in Japanese */}
              <p>
                Lorem Ipsumの多くのバリエーションがありますが、大部分は何らかの形で変更されています。
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
