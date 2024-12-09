import React from 'react';
import CategoryItem from './CategoryItem';

const FeaturedCategories = () => {
  const categories = Array.from({ length: 6 }, (_, index) => ({
    title: `製品${index + 1}`,
    items: Array.from({ length: 5 }, (_, itemIndex) => ({
      name: `項目 テストデータ${itemIndex + 1}`,
      link: "product-grids.html",
    })),
    image: "https://via.placeholder.com/180x180",
  }));
  

  return (
    <section className="featured-categories section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>注目のカテゴリー</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              items={category.items}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
