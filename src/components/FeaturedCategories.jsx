import React from 'react';
import CategoryItem from './CategoryItem';
import hammerImg from "../assets/images/product/claw hammer.webp";
import sawImg from "../assets/images/product/electric circular saw.webp";
import grinderImg from "../assets/images/product/grinder.webp";
import pliersImg from "../assets/images/product/pliers.webp";
import tapeMeasureImg from "../assets/images/product/retractable tape measure.webp";
import wrenchImg from "../assets/images/product/wrench.webp";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "工具",
      items: [
        { name: "クロー ハンマー", link: "#", img: hammerImg },
        { name: "調整可能レンチ", link: "#", img: wrenchImg },
        { name: "ペンチ", link: "#", img: pliersImg },
        { name: "すべてを見る", link: "product-grids.html" },
      ],
    },
    {
      title: "電動工具",
      items: [
        { name: "電動丸鋸", link: "#", img: sawImg },
        { name: "グラインダー", link: "#", img: grinderImg },
        { name: "コードレスドリル", link: "#", img: sawImg },
        { name: "すべてを見る", link: "product-grids.html" },
      ],
    },
    {
      title: "測定ツール",
      items: [
        { name: "巻き尺", link: "#", img: tapeMeasureImg },
        { name: "すべてを見る", link: "product-grids.html" },
      ],
    },
  ];

  return (
    <section className="featured-categories section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>注目商品!!!</h2>
              <p>人気商品カテゴリーから最新の商品をチェック</p>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              items={category.items}
              image={category.items[0]?.img} // Use first product image as placeholder
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
